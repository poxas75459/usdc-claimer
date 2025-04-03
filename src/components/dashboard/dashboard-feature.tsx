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
    "5S7JQEYxhAuScDAmETjZbw1Gt5Z4Fq8qYgx41YXUhudXdpMvhsBdFe2n5ctWxDPcQiHnpy7ESmSQWpyperPBkehU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ttiie6dZxf434DBrwtej4fdR3giAQPKAj3GvyqSkpXskUcC6sGBa7WZbhzvJMMBrk1dXQSAW7ub3TxSXAZh6Xi",
  "key1": "QqKpR277vowB6CjTMvChZk8b2VZtuKGGEd6uu2DjUvLwrnBUz8mUJixsijMF1DyDzmvDk1ezFgSVAtgLqWJgx7V",
  "key2": "56maMibwDQf6GeM4XG54L4C88im6JYYfeVL1h5iggSf213L2ktUmA6VViejkaEMx2Lyza6pHy7zJ7T9B3wupjsBS",
  "key3": "435FkH3kctHWLQzthHSCKQzjZXV58DqMR1vVoAhLWdSHdHDVobsm56LJmZpUzHQuB9gRZ82vTAdwUJn1swU8tjqg",
  "key4": "f9sYhkSwaRBuHCSMmY4LLR4RFvL4mVA6MciSK9uohZBkF9q28nM2Y5AHoBNpcAAXJGCNuW6mw8qEeH8Zr6Yhw83",
  "key5": "5RERdTusUBduXESpjqVrnewXzFaeyatGkZrTKsZZ5NBDmWB8FrtsPWZ9rsjapkHQVoER3R58AS87HjHPZHF81arP",
  "key6": "9ijiWukkqGVgCf4S36bMpo8J9JuQFk5T7kWUwdpjdEeQwyqURsGJYsw9Roin7iwuwP5kL7N21i5tVvsFEETrvtT",
  "key7": "3sfBSeBx9xnrpKCAfCFXgA1dUKdcLwzuZ6bMa9ExehxXuKj5yKct2vEYUxKCGSnBaZxLch9hXbMM3zu44p4sjebL",
  "key8": "2L7RGyFcQK6nZFKcUAaMLiFSfdhfKWdz9RtT6FF3euiabEsb5tEaXZHmb97SVAAt2dW2FRzYdJHQgpGRQHp6snbR",
  "key9": "5KJA8RFtDcpSUnAgh3xiiB9TM8QqoquAKtQi4mfcM5abYbE2nMcdqaUkrFNsCrDGZCLYyVpeTAirNgYm6sMADGCA",
  "key10": "31CxQUtKPEBNbXDYf3EkmU6PvmZcHQ35ZKyg5yYDFFBp5cJmdYr9V2kTGoo8HxXx3FbLdgcShjn39VMqMuZhR1dL",
  "key11": "5ibELdH2rxVyTYjdsKtwbztwDF7WGBNg5BFeivaZnQ48QQiLbSAkB1nmvP1XXifsWwFL1kW9FvJJ6YFr8eyxniHp",
  "key12": "rnDwdLy18KSJ8KWPSZzMaC7HxFWXmAuMyUW2CkFgSfTiZjrcfJ9qxYHT2raTp3WA565NMgcND8umsdyrMYjADx7",
  "key13": "hUXksXjtcHaMHc6MgqvsJ6i2evhYy4C9AruoaHFdi4SHyPNuSJnuNuYLpqeek75P3dyzSEwc6jho2tyKrmnuSzK",
  "key14": "hYHVhWqiJwnmXhUgGUbJ6rk2xaxDSRZERJ1GJcN61PSEqjke79S2mTfY8y9xjkw3y8cJFJx1TBsRhedECbKMvmF",
  "key15": "4YtaD4ZtmYHyPMfxFwyHutoxHwVmoncR2bXYiDfAU4YvFCgkMuufdTDiKvXDgP9HA96nsndSJcStm7szoaQs3XhN",
  "key16": "4SorvibhmM2gKRzDyw2PUrLfpfj4LBpnHyudmuJyrr5pCHSxdFNHWSLz9YKRUXpUGrSCyNvAesdGeAFdNqCKwu16",
  "key17": "4iXQrQzMhfnmZHTFtHHKxquSDTXSkeutonr5EunrPm8mriry1Xu7sD6tvqh6HxBXuK3EZ3sVm2777svrQAo8bHfa",
  "key18": "4WV2jnSoA8AoE3Ke4AjFpmZRJToCCXh81EeoSEcTL5YTGLM828ZgyJo1EW6KdhuqBFGeY66Umf5K2J2ZmTBzbrvF",
  "key19": "4QsoQ5HC6iMpciKidycZEix2ZLS8NCdQS6vJFGyKFPWBViE5y7GwXQibnhQBetEkRpZ3G2han4ewgP8jiw1Kftuo",
  "key20": "5D8vJvZGJs4tgGRbzi6AZbzPVGXEmH6m4nFpKmkebVsAw54WAd4eHX17Siwa6aS66q7PMzuA9MGBwTM8fckLisLe",
  "key21": "3G2AkXuF3qek586znLkHgtHVZBYXW4ipN9SEGNTuFe76SPER7fZbPqXAcGyxTbf5Vvmj5Prxg51Hu9ftKwwueZum",
  "key22": "4nhHQce9dSso1BMCj1kTqa4fq7n6NJDiKVEeEikUQb7EdozY8c2uZvdAZd6KvZFce4KzQC8gZm8ZnaBa8tQQNvjx",
  "key23": "5WfdUeXQFAXVUsjwWEW1W6wceyd8e6g6RguGsWZGQyxQgKvdaicLG6TQqVKJmz14QWUqdHZjGm5qNAL2ZqgejhGn",
  "key24": "4rWBJMKgSXynn39HyNvRTh9mPncaL2m23An98yN8fiyVvRnVDrofWcHsRWEVwRtPfqHQZ5f7W47U8aQiRwnTRe28",
  "key25": "djHLUpmEkt2H71bSRJXGFjX4LYsJ5DTcPstRiR3ET8YdYG1xnPqnsj2y4ATs8G2Ko5VqkJVrBejchRys5hJaQfd",
  "key26": "4UHFbguvJHR4PXV6VdF6458HQomzhofzVxe8HeYV81eFqXfP4rZXvo4ks33CD4e9QqJJV1B81gjS9qG4YReWvQuv",
  "key27": "3gfG7MxLKEYmNjtwEGkq6ZjHMMyRDrF6HBymDBRvZVPCi1kEh9p8L5ymkhoGCWqRFV8DShHo3uaUbRJQivfcHgxn",
  "key28": "KxiHjkP7BAeVkyyM57VViGqPArgFzwdxSaUYbMZ6PAsHqFjbcFHv7Z2AoUL3tk6vG6CyasWcZ4HTkrbGv85nXCd",
  "key29": "4ifto4nQdJ9pGCogsKyBsigJ8r3RMZSK64ABLGJXqv6Q8nUPz1d5RG3MS1BbamBhyNBdzgBWyQviqv5X8QGfVaBo",
  "key30": "25FMt3uMYoNrL78C3vvd2CnnVcW7zCRzbiiE4VFSrCxhu9hd2sm3tys7T1HaFMr5sFcNPm5czFHCZwamTpKQ3Jpw",
  "key31": "5BwFLhxmATZ4AfkBK5gw5nG8h7AZsBW8vAHvnThwbAEfhgzkf945N2dUoQPjAMZP9aU4PtnjJQU6ZVN7bQFxqBFM",
  "key32": "3phQ3CYssYWmxeU8YBfXNMVFRyjq65gf111gp5zcRRNqRwZB5u2JPshR7h6Dt4YxafXXuvoP6ThtHgCGynpKuJJ"
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
