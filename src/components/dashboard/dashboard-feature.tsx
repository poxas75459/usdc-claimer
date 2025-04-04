/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2BAiih3qiJgc9CogguhihpKm2AEN9YjfxphWnEncaNtRqobK3bPVbu496xmcFMv8KccBGM1tXbVfXsKsNBNRqL45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfYJvkFxVWkfrQJKqS5Uqxq6aEfwU6FToeZPd7PYPRyrHMZYxijk1uPCt7gUeY3juxCVyHiku6VSXM1n9im1YGJ",
  "key1": "3kyjccsUVy9bpcbSnFpPdzTbxududmV2kxcvbi5oaQrkjFrH4whRgBPKnoE7NzcEKZWk64cQ2NSWYLyKtfn2b1g",
  "key2": "4gNMdX2NZD3ZneFBmVGJZEoc25nrrCGKfod7msRiMqwwhEifmSKC9BJmZP6Q74RWnWWSbDKMrPPQJ58hdjiTUa5C",
  "key3": "4N3b9ttA85KfqAQRYitSUbDrDo5oGn39RjdA6ouQcork2CGY8n66wQLHgCvGF5fgpyRcPDajksAThzUhYJKcP7gA",
  "key4": "5Wh75JcVwQ4ox81DPLtQFJihfyP4DTEgRgkaZErxE1rrSvyQBEKiLPYzT9VP3ZXAe2TuAQaGtzYiX5WF93gQLVk2",
  "key5": "5i4tqsWcmD4pGgo7Xp9YxYvBy1gxUkeE1uNq4FWNXLcFDzQXJRKnD6nc8zTGcTV9MkAQ6PdVAbjTLesW3c6N2qV4",
  "key6": "2HmVnfsGA3txBNHHFfJzNM34whdF7oPTBXWdh8RNUeFJWKuhbNyfVqEQvXtkHyh6JMrTz4gBgwLjVRU7D5PAHDrx",
  "key7": "2FNR3bjj82XiL5vrq27k9zDL3QhrZpPZNzcKVQBbmz1ymadVGsVXkjfBnLnS4sAhiQiD4fr5Z42crUcMhPQwpbax",
  "key8": "4WsHCe6aMjreutC274oYzA7RZfLvqWgyThx5jASvxwMXXxU4XXYitBkiZxB8XZVmeu7sfbwcKHbWk2uK3UTcik8i",
  "key9": "KU9hciocXQY5VzFybJRHwdfzi4pGMYe2NZcZetDei9dje9pu7UHRMUTbW2t6aYNKQRSCTsbK6JdKbbKyqc399mZ",
  "key10": "5NXpYyz8zdUhdwCBbx31E1NGnRUkHysvXWiSPH1h7BujakPwSWisyKRjX5zYtLSdsPJuTXGN2Sp3pzc4beLy8tti",
  "key11": "5y6ea3VeZURQU2xPyRRPTggzgj52rqL4LbCFLzH1BVUBCBvG4CE734LKmMi5XnEHJf2M9aiKQhrBDavmkzSC3qYp",
  "key12": "2iuj2MsW668EuQdKF2y7nuJRAYLjgxWETbXurdYWijh2qxcSaaXYsufSb1xAYNKPx884b3W5sKzE8z3dG1oZE7qH",
  "key13": "UqjzTj4M5HmS6uNyFJ3aWy2ufqC9AxaGm4sy6va8JtTBLC5CK7gYQxaywWTtZ4vPbCD37oXEagNguaurXxUUfNA",
  "key14": "56n1V1KUQj8e6nXFW6KEWTbBPKr92h81f2gevqE5A7jNnXk76F9W4P9kcLmPehHTLQGhErw7SHJZym3pUaSjSgEH",
  "key15": "DYsLZF4d63xK9JVAENHYUfAYjnvnkrqn6yTxqnRXdB6fkJRuCQK32EFyBZXFkH5hrTvJtYHkm4HwR7eRxxcTLCc",
  "key16": "FiWhjbq75RCLYTNHEDhHtpdh216T6CSvj6a4FzeT38wRWGQRDmWnRVoSQFfLVmUoPcsV4aUDMHPRciasH3uFhb1",
  "key17": "5UV9gU2yJrUDjTjsKeJ3MRLY1M96M4KdwexU71kkbAMkaJeonvt3reUCrXdPZdcNed5eqLpVJEMCF7myBFkys5AC",
  "key18": "49EJ55dq2oSmJidRK8j6SogoUPi62MMvMyPmqzybUmvc6hK8HBM9QoWiAwNogq42otfFfrKLBnFRkuNdG7dgXYRv",
  "key19": "5zLJmE7qKPEYKUzPF1ZHj4ZYLb52peg6ivXKAz6tYWMUVt1cqefWvgmJQd62nCfFjXCbvaVWxxNzoCjKFcVBRexJ",
  "key20": "5hRprJ2jBeRKgyZdcLD73UakFM2YwDoEpqEvRZT9b6y9ibFL9d1aCvctimfAtSjXaegs3nPU8YCUM3gG4cu9YMnn",
  "key21": "56QKWnVHYsysYJvefSdW1dszB7E9GdidfMEBWbjipZVXaUKPJXfFyrvYfA4m4GZ8TC5Am6z2PPHfHswrM5CiRzdj",
  "key22": "4v98tvhoxq14bsgqDfufkpAGMaJJ6JZtuhpK2MubQgYgYSpThv9yZGHpZcTjHCwXoEHA8JTVoKjDfyFvCgE8DPfK",
  "key23": "362qXegeYRdsxUi7KJ7NE6Ccti7etxx6JhVuSoCmtFCYbjAtAcbD1kiWcQoGoPGGrQbDRFcMdhgWHTdo8BdCyxED",
  "key24": "5eDGtHQ4qm4oWz9zmUPGn49hbLyy8B3fUjG8SnHijJeWicqwmnuUACV9R3R9Db6RCMLnrEmmQArWNQbtakbh58ra",
  "key25": "4WFobnAsFfrtS7fHitUNyvekD4kJkEs12USzE1PBjvJzpyCAuxFuHJL5Kxv2ioALnc2QgpKhAj7MqBLgiC68SBuV",
  "key26": "3gtZoXpXbPvxoWw2KdXSBv4N5L4CgkFDBPsgjzrJaK9MtRV4B12QVAMecA3uguGN13Jpge71urULywysvyqqb1gm",
  "key27": "5BsPAFV7WDrsQmxr1qiUphg4u1K9UHewygi5ujD7JGK2katVNnEPqVzApQ9Ljj6dxR7FtWndpAACf4o2qYwrLxLx",
  "key28": "422DnQxqvQ6EARs481a4fuuVHiq1qwPrGouWswpnQW88eVvTXbxskmK2MywbTunp3J4JV78kWgxXhxuyUq6fNxWA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
