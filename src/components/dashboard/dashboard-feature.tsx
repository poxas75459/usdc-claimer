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
    "2jEoKwHq511M5nNuq6iDPGZZkvTNNEoSiTf1m36EABT5CSt8aedUN5YzeePKstx1buveboQRkbD3zgNzdiKaroR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c86BEEP4qygeSA1FVphH41yfqrQ71tCEFeCqFBpctXQUAer3q5tRVB9GhxpGBiP6Fp1VM7MQhpyD9EnCATqRgHy",
  "key1": "jqq6cNvDTNSddJgUyKKb64e2xFYm9PNe6nAabZ57XNqwE7PzghhfePqnqzngb8y8QXspigc45f6TYUWUgrEREdP",
  "key2": "42fKi2c615KWEtBRnQfkpzbBBVZpWyfTzTtMwHi9zu6b4FoeKrxukg3R4na7qWyriABJ3KoBj6MGVJgzkmfMRVNb",
  "key3": "5KG3gjcX1XsNmc2n9jHEawQkWxyoHxF1vKLWELBEJtoC4tCNY1tnQfMUJnUcPii1hHemCpPLehSerVBGL4Gz6FEM",
  "key4": "2eVmcpaUu3XM58xc4TDarWkGCYXMAus3EQDq3kQBPsxExGTMBp44p8itZwt6vss8yfJLxtAmtUh5x26bjBb4Be9W",
  "key5": "22kVPkF2UDaxS9GW4jCNjmf2sHjozE2pKcTuABHjfYMfNCecnQptXhM1P7Lz2aQhdr86LNgVmeV3M3XxZVNVNuqU",
  "key6": "5fYU152pD2UxnCYs3CUmaL2V8nvF9TZuJ5aJcgrtD86EeD2TFGJ9VppFdV2tLRXVk4yzFXourvNDKjFTCXb3h5tC",
  "key7": "ntZHrfcpWfdhsvGQWNDQUshoD1jwH2p4p7czMcSygz5D5vKPYJxSUvP8HXFzjT61XNxBuHWGvnJ12Gfwvjh7cyJ",
  "key8": "31Lri4127XKe74FLR3ruQc5qDwkkiPpjzxaLB7wkjyhcrmoHmBZhiJTWe91xXSkixk5icw3yckt4ZV3jBqPvSxsL",
  "key9": "3EXU7E1vTCSkMBR629Jswkm5ggDF21STeh2R5SFDRKvx1NdGj5iPgoFTkWyisT4v3GthZErDiSFy4uztyc6rqNfG",
  "key10": "9kqyNNdhsVi6hRGuwx9NVQsphmGm3Nf84tm8WgrTQ7xY7ZEYqEv8hJw31vUSjCMc8U1D5E1EiznesLMG9JrxgdH",
  "key11": "a4cdzA8AKXC5coaj45QjfmRc6MfnTYftuaHQ3AhcUWLubVpTz6RLXTqku8CAdrhvK66tk9gsdQNgaeFNRXfPUSt",
  "key12": "4MQitn1K9wVRiLKDX7krrqmMWe84DgWEnJrVnHkTAizE71Fjpj39XVhRmM5fgEUaZjoU6RwjJaNXBhVyNRRFXm3D",
  "key13": "N4JvuBtwGgW1mtSh6BKWCPEyQh9cvVKfhgrPgmiXkF4NTK5BxYJhbCMNSzR9Kk3hy6ac2dGijFcEBBV9G9P3trh",
  "key14": "2mNEAziCQQRjkXzVWMuFH29AzZR2KwuwWSu4iPt5XqDZyHcjQJBECXkmZNYyCzn7fJwyyMwEUCCjaMaAYf5gA4sV",
  "key15": "5VGvWcHUdwJhGy9vTgJMTdrWJNeHUfR52hg8H5qYz6fcA5o1HqpQZ5anGqXA1zDKGkmwHsXHMEQFnAgpp47VVcte",
  "key16": "5H8Dz9xDkKBcqhhjrsUvpZrrd78pGMuqsWKcnHczxhTEnjdvSaTSNCBvNvFqwh3czptGvSZPNCQGqeLW61X79DvZ",
  "key17": "2vXjpkcCfci6k81Aaz1DbeSPNJqZxZEboavqRGFEStqZ3jRMhiM1qhgQvJAZ1NRevL6WyJFEdLMa5sWxT5DBJf32",
  "key18": "48wvNKrfnc3Dfxc4BfWfuN3voJpRZEKkb1dk7ruL9KVzZqC5CKDnj9vBD4Z5zWdP8ZxrYXfytvZ5qFrzjgo1ATVR",
  "key19": "5RL7NbykH7yZn1yxMtngiHpvSAtzuUtRdEL7Uv2aPG6VQWVbeAjogVfNuYFrHRhvxmgfKRpkP3c3UYi13Z2mTEqm",
  "key20": "5FmEkLbgUSMVNwwwSGucWuERbR9gSz7Tv198S13dJrfnsXnLuigUTJ67fvopw2fqeFdDpz6LLLT2TFevk5oDAujh",
  "key21": "MSTxknDNDMyQbtf6zfiT83rCbTpBCgJxpZVEiCW9Yj3VHbDvVHpyDB3136RF1btktoNVxU7FoYLjf6G4qfQ9rkj",
  "key22": "5FtYW4VnKpWT5GCchEAoHkxYd45z5rernbcE1SMnsgM46SF9qZhpwT6eM3Fhvw2dbu8jhaX7SUdEdqWGCY9WFe6v",
  "key23": "4c1SXFF2XeQaFHahyFr6raXxXxLkvZTgHPgE1G8T7WCyxbyvmbYCv2wuEsDGm5mwFfRG3fsTQsJYAokfhcJ2ULvy",
  "key24": "441RrQp7Yyp6ENTGmwAUuvSroWBfRx42iYHnGDXZqMJW9TwD9qZPbxRcXmfjDaaoRnKPoxEPx4srzRgyJaya9quN",
  "key25": "4FGmcWdc2ZTNyzQJTwi69dvZUKBDMiDaq8H4TfRUoNrgvccki3Fsg9UrXWt5b8rFYqQy4xRqBuuuoMf8vUQTAyLs",
  "key26": "2adgWnkWDFawSEhp98n7umsBZwKEBYTzEq327GMsAx5ZLTBRv6DDwLgdt86JV834CoLsivwQAdrzFD5QeAhTNJGd",
  "key27": "3meAbhwDnpw589QnBaoTqY8kp4SwqmPykJZAENbH7bRWmsMHQTieByYp8g7GNEbmoaoys1mrstBtqGSJXkiFq3v1",
  "key28": "43DDJ5AsbgvSadwSxdDiiYmHcK82QwyNmFNeN4W3m7K68XUNurHS2E8XKNzqJDFa5ApPx4AA6nQTpBSdysDm48ZV",
  "key29": "5hTZC1zSDgbbMeAjFaf5S3CgatEUp78qDMTZfCSLN5Ky9p6WqzetUrYZnjDe4zRVvax9xnJ49BXb7fcswLJB8boH",
  "key30": "5728FXsHKg96HQr54NLuajFT5ncJSEUa7c8dNkJfCm5uPQYwzgGZVCqEGoFXWHT8hssujQb6LdhzcFMa76GmAAPw",
  "key31": "4ySanYJYpp1TmJj4bb737Z1NVGCp9RUyXwsyC6dwXWny8R2tXiPKGixtqm5jfjXN1Zk1TycNU69pT8QBRBKjpYAW",
  "key32": "386ae6AB6gJrSwpZyjK8zGM5yBppU8pHkPXagkdVrEnmdCBYZyTuS6TJWAvPZqZKMkNEfuVog9qcRJ53PsRtsNtN",
  "key33": "4Pnaw4Gttcbrna1bQGdtHzXdJANvJa2tAWeutDPN55aKCjyD4PhkoVTXewNmULSUGzkQUnRP2Y9BjUMMnAJGNSEz",
  "key34": "73RkDu6QvBV9YKS2uETuVyGDn6zsTYiHNqv8bQBgoKP2mEnCeh8Qnm38VNhUvxC7zpAuzwo1Jw6C6Pb4j7oBfnv",
  "key35": "4yvRhdcvQihrpf6p3zTsF5oGt4Vfc9wB46SUoyYNB6CwqMzFY1gVszkd8Jv38zpEk1FXwfWuvWriCsVcasJBX4NK",
  "key36": "4Fk38ic4Guame6yiu7ktn6ZngomoSHWmvPEwncMsjzBqJUpvsSNKAP8U4GNYWXZvftPmEY3vxWkPMfR6t2rki4Sw",
  "key37": "4abWRvnBcJQcXP2mTBh8tNFUjsMFEiJD29LNoK97z6i18myMfDM92CYQdCA95QTdmAVLBTxeTemoTauUS7fybmGe",
  "key38": "3D5HPWvpcaFkxyVGG1uSVijTf3EcRxhjZxNeGNyvXRW324rNvyKsmXpQGPUwfRARcw6ZbVPsGZCTWN9nBWCWW3mb",
  "key39": "62EBsrHd3aFm1kLJ9GrrHRbhx2iuFmfzo21a6e7eriCTQHCcam4wYdfpAKxdqwoM7EHVSa6Eaux33MehEjwC7s8J",
  "key40": "TYFA4AZaAyGaqEaVqedYgYZFh9hrXbXEJZsnCw3KXGUnBcMiuyjVUxckEzch7uecYhr4FZmS6Q8nD5DtMkXg7aA",
  "key41": "2RRLzi4Q3kKGtQJnwWYfKK1XM7GheA1fSTkgWi2BjzVbwjByvnGzopfzBCUpB4ELtbzfZzUKpx7oxx7PAWV2SQeK",
  "key42": "4xH1xHfcrvGb3nRzStYd5PUzHGXwWFfPE5fmaHJ1Md4kDTHTywshGax835pWMVBSS7k4GUkFxaTcAfQnAXP9f85x",
  "key43": "4ycSmRWvRnhSLStXtiNSNf1p6uBPzRDhuNJvLgJkGLH4cbzVLiD51MVx38F3apqQsgseossQLkDaZTfgK7ePqud1",
  "key44": "5X6VycS1ZwiLhDmjF7JsH5rdz1W8f71eXGwYg9Qkvz3zbDBwL5dsm2RhqJYNDcuSmbgsoQcWNaAqNsox3ovW7VmS",
  "key45": "2EBVCNuZPshY8chZYdHRSnsuw2eKHXnHuEujubBMKyY2WXM53rt5sDBVs4eZi5JcS4SxhqrCEuBQwCmfN3SEmKqQ",
  "key46": "4n59i5mzMCDhNZbFZUYNBKEaJrSgzHWjR6yqBZdiJrkce2PUSBEtyfUNigbFxFiosdwJedS5yeUiaFztRtGUJXk5",
  "key47": "BAbNYE5nqvZ988sng2etzM3J3gvVxvo8CNTN6bv5bDjqpqWDAosPjmHZUHHV4wVjKwZ2KLCBXis8hJ298aJPFF7"
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
