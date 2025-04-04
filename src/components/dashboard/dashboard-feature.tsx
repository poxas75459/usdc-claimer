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
    "4UKJfEwDy7e35m7ULe8jkYSxF937Gsx3sj7U41vohx6X9pgZv1GZ7R2uSxhttCAw1LD3oampx2dXb8kPm6yqvHan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nC931uJMVjRzeKqAbPCcbZdevgPQq4qUPFsz4KTvmqw1eJomJVir8HzHjys5RL27LtPuzfnwTz6VHt7spY7rQ23",
  "key1": "5WWyQfAc57qHE1eRdjg67DhmF3zgWUWrv3gJf74dGP9HdqJfMKZSz4eMd9kxU1cjnrT8pVGpP7dxuV2wpnncSHA8",
  "key2": "jEKGwqDV12iFGpR6Zgx1RzNSZ2kGJUNfs4DXNHKiCFr46qcULVhG75spVgFEYQKwrapnNqjKpTmQ7XEUVnmbEjE",
  "key3": "L5umK9nTt11Vv6qLa2RAVQQhbvdwp33g7PBr9V2BypkRKMDZjBhaZCGJajZ9SsYBxNVLxdjnujjwSu3h3zi7D4p",
  "key4": "2Be5Gq88Y8jvuFFgHQAyQU1WHDi4ZPLXb2M9qb7FJbXH98pu8rVo1Ui7WyRRWBFrDUrEu5eKyV3vACEBsMUQmyQ7",
  "key5": "3aDSjcoBpd58uM95GDYKavgQA1FvzLkRUyNmFzbtZATnSoXWt9gmFPADV2PyhRbKEUMtqPQxMtJrHV2P6iXQj3Kj",
  "key6": "3VG9JA2WtcUuMcxEujLiKCs85yEBHajhL4K54xWoJUPvEHLkG7PGcBiuZiN6XJ6Q4rXWU23xLYZ7dmCMBvC34ppb",
  "key7": "4jFMKXAT3DYZcbPbxJKJ7PBfMjcvpHi317T1KXRrYPg4XNLHX4Cgpb4m7yQH1cPY6LRWd4Y8z13hJDfZhgTEGHHM",
  "key8": "2xyrcDww1fHZnYQBdQExitCokszqZdCnZ2aesG6svj2YTjioPr6YzLjf2Q6QKfDrMyscauWZF5aL2xjsGduSJV97",
  "key9": "3f58UdmhyH2UN6Gdk6K2EK9mjXwzpYvMwYDKAZzAb78nV4N2Pv8JGSRq7VqSznGF8M36Rs7dPZiddP5kyhnPtuH4",
  "key10": "4MH6uTcUJJ6bWEH1pgvDeYsi3mVxGBnoENgjv9evDEfiuwzxkSJEsERm2dy285Hcqdi7h6YGefSbk7t8CP4oNTxq",
  "key11": "tV5CGBqWmeVDCvVXeYcbsH7RzyVDfHuJjbZnzcN59TU9oXJPmVWdVBhJi1HgV3sr7AXWsnLh6YuRZPPf1skY926",
  "key12": "Ua4Yu12PY2VhK7oGMXPGKKYMkYhyiunF1fH1hWtzMvX37Z1XTNkBwApvV3wfuwmb52g31iR58vKZoBpfsu2R4nn",
  "key13": "T931vvBoj5ED1KRvqBWxjnQyM4NVRRCDvzA6Zx5ujY3mNvMvbuhfinXRaVBAxBNfez62BUzmGECmtV7uQ9aNXPP",
  "key14": "5q4Bd8KEjjpnmwzreSNtZbZi81JBeVcrE2wqSFQ8PhwcfuDF1Hsks6hMmXLMtxQiEMRQvsHJsNLy1qnWv5tAxwB3",
  "key15": "4TWnHyWbDcgYNWs2dMW9CF8eqk9xq1SVG848Z6VUa4Yn7uSFfkqfvP6def4wCbX3GQAY6vdd7HapKzkBu1nstLzm",
  "key16": "2TsMhLwnXBgSZB9zbr46JE4txEsakaubfA7LUNDrmw2Muie6wz2DJvyj1WTR2KahqJ9MvSR9852K8zrs9hYRG1Wu",
  "key17": "4HqpzpsYp5WWkvwn1K7W6GpomibQtU4CF8dkx6RoUNNR8RJzabPZmr6Ym33bkB1eFGkdiue5TNw14n3wWLu5tnFr",
  "key18": "4nMKjqUajU7SYMMU9Th6vv4eUBUUuMK7Q1pZZQdzRMQwcQoZ4ThJomMDKCfXWM9DBGwcLKJfjLiTi7Fsjb6rvYkc",
  "key19": "4mFeUx9ZVGusHUa42EVo3ELMBrtMmJvNrX3HtHFAfFGpRPApi41FkxSfvA7wYpscsuxT6YnposMyNQJiHzBfytnt",
  "key20": "53fexXapaPF3wsvySEjRs6YoHPph1Mxfz4MzbMYcexn1QeUqsDVeiETyABXLYxKNXR9tM5yPEf5pLFKCFy4bHju3",
  "key21": "2QT8xrVFSfduBokNrAc1ecDByqhNZvNuxc8rYg42G6T4AdRMUaoC2zfJqB26gpSgQw7YHe76m7KPPKtV4TR8NgHd",
  "key22": "5X6NrwPSgSJw6Gi5kpegxP1mQ1Zpnxh93665BHcutTXWDc5q21czPJwPhunLKUVAao2vKDsCNv3pyFPFFJ9JFyPb",
  "key23": "gSiTdYFArtBFUAZdp6c8Enncu12gen1D9RopvMysmTKKidoPAW9Rhhyr946V8PaBLwagg1QPot3EPzXtzFNfMiN",
  "key24": "2nfmgZASp9N4Afp1XrqQEGUKqNQGX674JDSzQYoyuxu2obQJAVEExz74j54VxXz1CgGTGLwL3Z4w2nM2LSjWEcoE"
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
