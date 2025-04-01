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
    "4sfMFWsjR5aA89wvRK96PDRVjcnMzSh7PqTKdz4pyCaHeqY6ErNpCM7h7hq7jB5nXLtuLJ6juDuigyXyvVriuKVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ij3tyRYJC4anb5uubCz3TbfBFeC8ZB7MVxGFSAD5xPxnyBcdnhKcXu2VjsNaLq7CNFWrwzxaFiWhTFPatzGzaPB",
  "key1": "5tNNu12iSqwrDBkmXYYQLbUmvHLFXpMGEJpfy8XhzMwrYP6xpAFNG9p9ds9oaiP56LJvznKFa2gM3ZJiGvVJg4vx",
  "key2": "4Zpp9w6mJCtf75przuzMkuEEVE9TepSM2ydkfoDgYU86UkFgKQoGShY3sYJJxDKTYxU55wVjt3f65dECcPFHC3sA",
  "key3": "33PU4JmcS7syL4neQZJZZeBWp2mKsa95NegwDhSiPu2Hg9WgmiER8w6oA2W1QNpLBAjZT8HpgP1aDPJwMQVs7QDP",
  "key4": "536atvH1Kiek6oLG8328Eb1usZMQTNeTeupcBSWE4sjj9DU5Sjf47Me9nrTCMWB1Qgx8LYfmjq7fSrbDNySprYhx",
  "key5": "5JXaBBoLiD3tUhGEuBrUY6urTb6za5aSDRmytG6DLbzd4ot5dwrshkqjnKdjP2BrSAu4kUQdn1tf6K7YVRpu8Er8",
  "key6": "5PDuLP1AE84HaEJA6Dt9o9wd7WgQM6JJ9cRPx4cw6yVxR1jNL2cigbc46cWFtDbAb9ahV9gEzE7cKKZ2UdtVrufz",
  "key7": "MDPrcRCai76G4DiH7vcWMVzQyHdu93wHPZ6hcKQDdjiV8cUxU67ENMWKiwenGM7PqM5J9Kuti6nVcaRsZJMuDvd",
  "key8": "3iAvGiRAeRaMG4n2WKmoVbYCwotGgXXzxCwVD6aMN2zcjb5ya9VeNM6qaWhc2YzyFv41u3PdPjC8tiAiTG2JNFMx",
  "key9": "5w8QRbYVDiRFPek6oapgkGiGf2JByPRqrTgmy5G5GeJNxAamqosPtk9pJ36guyrpuGHU4ABnczFFUzTZwkUkBqJg",
  "key10": "3ghqjAYhWYPHJN7EWA3fX41KENDFx8SwvqjBF8DW5UCSgTzcyuJbVQ5H3K7WiXxjZjSMBzmExRHq5hfwCbTgNHD",
  "key11": "J3nt3aiRJ6qjtfUeUX93oRapjFBSyDaA62KnsvMtNmGZYGq2Fg9kx7pU3Sbe6FHNrBdbaR5HU5BFf6sc3QkfWHo",
  "key12": "4UPYGP5fXZY25ScqrtVXA5fNgcSveKB4By6bBrq8vcsjHj87UZGiBrrrpo3eGvQTg3wEYdWqAH37MZsFQ8JHYyr9",
  "key13": "37ydrw2MGkie6juk4gQFps2TyVpcPD4xwYGjXxx7yf5AuG1JX8MRQrkc3MnjynZ7ffcN3NBwkgSUgQ9dsrZ3Pcfu",
  "key14": "8MaRn1a55do42B4NKNpXiXWAUYKY1cv5o83X7fXSFAZJamPP6jA3wfNXR2Ektzo6HvD1PiEjAwh7LJ4bsxUX69c",
  "key15": "2egzTPnrxKptPPsJUeRKnYvZXAxaM2T1GpDmZ7BiqKtW87Y1NghZEr4nzdK7fkuLVwUYi4G5YooAHorR9GfsF31n",
  "key16": "RK7oHfnWL7FC9ijvXqzern7hjB9HYS1uifbPTZHPYi8ngFce1GuUj9obFcQM9A8EHYjuU651PkFkg8mEWRCWHT6",
  "key17": "2Ya4frcF1UMxspcCFwW3CySYH28ohhs7aNE64SyqFeq8jASh7CDbqqDLYKqkQzjwRXcmgLdBpyzoaXAmgpRFZRsu",
  "key18": "5vbG3iVJdTZbdin7NaVzGY7r4WjKUGYvXZETNEfynhjx4tzaWKV7SF6F5KPfyHiGRraTvdxyrxmTVsKmKvM58fhf",
  "key19": "gbi6fVn7ZNNWacpZHA2CA9Gut8ogjaxyXNAEEtbmUnGiyL3r6Ha88WqCgmnw56AqVtWBB2zobVhxVjFUDbaMscU",
  "key20": "DSdyuq7QujKh4jquoKEXaJ4HjFh6MdXkAi8QjokgUco89TWtGkfDUxFpfQU1f8P1zuZNXB4ZvhCA83z6n9z4CPK",
  "key21": "5As1tC9oFdHNfBoid72LJaFpWf9gmaHCrbLhSmkWYnaJ9gBa5WgPvGvnR4pe9ej3wVt5n9ZwQTmo2ShbHNFhXneU",
  "key22": "3BBiozoLjz7L4bVtDcqNewUPWT1gnW8Rmd9DxBxXorz9GJMG3XLWwMHKtdBgrFZBDVhoJ5nTLk7jAZV6JWziixxo",
  "key23": "2pVunWAyfx7BryytcwiUwwY2YEyEB3Tphm6jzeHi6yoWVAceGXD7CqPGoeRL6oVcJYB7JEJnTXr4SSTnmdJEs1bU",
  "key24": "iVcJYCjUi8jokPkYvMVi17tVfQTZRQ4VF5w17ex3kFyhCkUffY2tjxLvbe2NqbLjuLGAVNAsBiR2baXUHUopVXb",
  "key25": "3h8r2oRBtLxWzQRYhBHU1adpX1pyQRLW3S8QS9BDJuTHUcUUoB5eG6aBN6oG5DjsBXaXe4WkfXnha5PAkLWatLk7",
  "key26": "mGWPNj1kTeRss12d71B2Bbr2e7XGhmdJi28qaMkZAoLKQhkaZa8uDV57Murs6of9q5biREV6EVwqu4Soz6s9qsC",
  "key27": "2yNxzWREryz9fJ3DNhLcgPW6KZrhFoUqD2kQFyoqKimKPMpTH4SVcP4W6SFcHChJH78BTQkzqdUnVdpb3mL2ZNqM",
  "key28": "2epZ2Rgz7hFtEmWw2jPbZn3rfkGhTCWQvjwh6hDngNuc1F3mspMUS1EaWRdcDTBGX24MtuwhMN18oFiAKo7TMg7N",
  "key29": "3y51vZPEyoo8sg5t1GkF3JKwEsRsy4XRewgu5rQCobu6383gD7vMTyAj3CktqbZtQXSThCRcbjJBvEao9Ep8Fsfh",
  "key30": "3738KfertWfHc1GTgTyZHvs4oVPJGQ7yBXbL9Yi25Mcbhigf6ETHfjFmxtxX6CkKDDD9Lsdo6oD4Ugk8PVXzzarJ",
  "key31": "5Cvhvwhk4iDmNqkZFNd5aD7QZhXJ6v8bJrVE1s8ATZ73HAMWfaZqfUcHYfZmV6mYv4iZ3AL23VLc74gq9xw5oKWd",
  "key32": "4sjGQvxzXEpuhLuY9tCDL5bzXGYdf7HRfpcqKB861vh37dDWPU75Tv9Zsg1bDtsD7js1m6J2J9WYacn45Nu1Ym1y",
  "key33": "4moZuV1mR3pmzpHjvtnVKZrquJscjyPjN4GuhPYXtFJ7dvjX4kEVwitoN2irioYCowpu3u4brtDFjnoZYPQxMbpb",
  "key34": "xBsNsxBQMUcKPtGrYXUF1nkbnuEH4UPKZmZVMpwqQYzW1BMQ5ecvanA4VpXgpSJicda4jQzJA4fzNRzS6Lur3Uo",
  "key35": "8DtDJDMDZ2x5dr53bamX5gC6uDGzCCyT3GYRiTstkDo8juwNs4rFPGeB2eQdvihFohYZ1GrQU9pcdvXfxKvAgZL"
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
