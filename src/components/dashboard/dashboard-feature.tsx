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
    "jmVgmSgYfRf8E6y1bMm3czpFG6pmDhGZswY1fNEMiCWQKJznkmW79Cm1dLHaiAZX6r6xvvNLRpSU2nFok471TTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WA6e8uaBfaqCXBwy5SDeTD1H1p6NNoxLh63reSdVmGxXrAfV4PPbU8b2LroT5aYVdoXtYdDzyD2yor4ApH6Sds",
  "key1": "59XW4M9LPJTSP8CU91NvosVx8NM5sLQ1AvDChkHthZKbRCiwHx5t8Umz5bk1HNcCtPk3nnZC7u8ebjftnUU7UaKr",
  "key2": "2NGG5tC1wwCKeEQ1VrGzGqKQhULgPRdfJAGxpfcmUKYEZS22vmTESZGkdgQg65VT5QuMA94PytUnpVXSCwAabZ8j",
  "key3": "63v85ZqBRRVP6v11yuueVphA51ujADGMZ6msmJ1UimUoevtqu1aBfJw76nRd6kPMfgGW4n78Eoo9D9rogpxaU81U",
  "key4": "5rHaQhHu4qzDhUSSdmCLL5pdnNnaWMMyaMvzVJHqAGBmAcUcPTUvkpzFqYoVzQWFVuYdJS1czs2ZX7k4Hf7TRanq",
  "key5": "5o4EeDgfhSoG9PQTFXcPcsud6tLkemKGCqfwauxMLWxd71U72aV9vKfKa2bL9uSnSPtgeUyZhuYk8wQXJvCvDvP8",
  "key6": "5KqGqAGFbK49ocBHMvhgvGGj4HeWu2KZb5TSSU8GNqbTM1dE2KaEUoXFK6uHK863Ez8gjEt99RXpnjmMyaQZTV4H",
  "key7": "3EFyfGRdsEoMWBgbcXNNFmJX11Wqs9oJyU3ydViu6XrU4MmsscdCYeXBrroLSYXUouuoT5SuKacQEYoqTUr3FpLP",
  "key8": "5Sa8S7h1Pn5KibuN1sKc3q5jVgXD2Xy2bFwGErvYp5Hg8RnWEaox7XEc8ss2dSqZtNCnWQUDWUkQZGJaQcoi9DeL",
  "key9": "2HYEg7t94fTnJd91NZnbtcYibfU7tPtow4pFTEETpoiCQL3Yo2x7jYHa2No47ogmAS7jMDi8EBSavPrYaWbmXYY3",
  "key10": "xdQPTwanQJVExtRujYQegeZfpRPWbka4UsGUT9rsztTL7tdWJW7ETuQsThPb1JVEUssvRcgSWFNfKp3VMWLTt8J",
  "key11": "BbBKRMQ9WFkYBo2BAJGcxoTTgHAgaFTUMt2zVz85WR5UbHz7j8xm38HZ3NZjHMi9NwnFhJ31LGVF9tXRjijBRVE",
  "key12": "3R3YkfFd3P3DGXbqaQK2xBVAp2Uk4MntLGKJvEySDHJodaX2SX5WfATaxHPkDJySHQT49r6vhfpb2gwubAsgBzWD",
  "key13": "5eE7yXj6JJ4e9kDibunoUJHzUiUhCwPJPeFbveG9xkymc7VT1JAdbvRQCay3Mr17mtWQ9i35qBMgHH4RacFxKJy4",
  "key14": "241ZmUEpYkbG2iDBwCj3JHWWH6mG1ZRh4uhxibpMeGPFBQEHeCe2xhBmRJtc9BFnnH5GXe2xUYUaktuhYzk6o1Jr",
  "key15": "3Cxh5jGdmwiYqN19S1fgC2jkLb3q4qDv3WPLE1GWo4phdLEj9YkmaX7t8NzgKfvyAVQSDqKvQYCnPcLAivNe4dgi",
  "key16": "5nRgh6nhuBcczF24VJRQFkjjbX2DaXbqR1ryUZFzxN2QfaVXiwqNxfGMh9c5wt1p43erFSJmmTPhmxcqrWwqKdbg",
  "key17": "3MwaV5Juiy2wJJEHHvmRDctorNjAAzDnwaiADzkTwc23vAzZshH8GS7ovsjnKb8o6o9pWnvxJ4E82ReQ3Xk6aC44",
  "key18": "UgBhnqyHQ1QgkgZfd4WRRe7S4kU6Jv9CVuKLRf8peBz4m7GeiyzUrW4ZEjj74Z85cUgbM69RQGvUTgiX25dRBkS",
  "key19": "3SU2cBDkYQtp6n9XrMS51EYHD6wo4ZQraEpJoDwu7ahsh6kxSUec6rqQfc4GdKhUUjNyU2G7ryVPaK26VDU3jGoJ",
  "key20": "2acA1qMC1Sx4NMWzLsKiLfaVTwrCeeNkpRgVRQw3CAXRKZW4TTpsoP1HJvvswyuqd8D6K7YknVrAU7AGetZtjjdL",
  "key21": "5FpFNnRS5S8e4dG9awDuLYLkPrRdQxcrB6QinxRsR27r3eiiiSJ3WGooZYxUvQCiK8Z5G36pe6yodwcH2Xq7p4H5",
  "key22": "2CRjm5Yf83snvDY6NqYi6F6NkgwGDBEvD53bTZrvmkHNPQ2pccFYF6bmPGYWESQEJQ28cq8dChiaFABkFvLuafwq",
  "key23": "5ajjoEnHv6oVnQnJ2RRxsMUyAnXXahMxYmcvAJQMiJbA92ULHsFMMQuJB5xKfdxzcr2vLXmiGpAeoS14fNxu61bb",
  "key24": "3DjfsquhzZxgSsQpKXoUJkZVhGXGCMwSNhYCJG662ePTLY1KCbbzzfaRFgp7Hh3zwZjhVL3R7ZjnK7PT4VRYFu3A",
  "key25": "2MfKmbrbkqnxQTvXPjMHFtms7A5A8EukyrC4TkbqWHrgvoPCJbcfXRi1EGbuMaME85WMqrft4RxaMMamW1JBYdg1",
  "key26": "61iFguYYsziBxXTxo2ZCLUACurLVgzGL975rdt9XERP4ag3oPaF2nfMarLH1zzGNHbn6xc9xkUYSDP2BhZsgFwry",
  "key27": "35jcTrvLUTPvBVSAocC6PCieaLj2kfF96c1gAPuEcmwxsqQhwrTMouwNH4o7SPJbBQfpH7HhC4zyDCf9XNGBForD",
  "key28": "5DeFooT93GMXqemNH1sN6sx8TNhQ3UiJMePPRirtyvL98AB2aoLpbxdNuqssJ4yWmobvqDT5Kb18fQ1o4oTL8dzy",
  "key29": "y7K23Gkh2cs9civ4ZA6CaVa95DRpQTBVDf55sn7XMkZhbqFvLVGVwG9hhiusKC1EA7UgFRNZW7K1ABNEMqxWuPK",
  "key30": "5ZmYqubWZer1pmrLkZKxjMmtj9cagCzyUasFDfrGahEKvc6UnrbdpUsmJrHxdmqT2Ga1PLdQQrZAvrDybh38fWQB"
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
