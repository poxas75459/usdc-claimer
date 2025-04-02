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
    "4GBoT9YqfFBvaEUJSh5mzGgr4RLh7EWznL5hB6rpqxwdJqjyKadgd9Ht63huHgH4NVMNcrpZ4obtGtL4jMgskWUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmUUARHUTjeKtyMSrtYDDdWjVC7r4DauMv7TTDnqusPUNxnyaNR7Y4bRKxupAkU1snAVxSFnrvD7eMrMxRN7dn9",
  "key1": "mAPMuLKeXYyHDgv9jZUivW58p55zTd3YM6fKRVyGF8g6g335uumuV4bxo2UgBZ4uofipP3kW11LQsAZiniDMc21",
  "key2": "2PsUPMNiWgGn7aPDCECiQGWzS4A1yY2hvWJ72P5C2MitMgAaz8HzGTbTTvhar85xPSijyTBTdj9pPiHRJhXWq6dK",
  "key3": "mFgB5BGwnqnUKoj4gpm8MMHkAryAADLsd3oGBS3wrWZ1pUnB94jrFEiv4dYPHyWZJAQsiyeeAQLrkUMZJkjjVH3",
  "key4": "4HW4habb8eE2VnovH5RX4FjdzYXWJAoEHsJVCdMWE1mU1jC3Pr9MpBofmdUt3LHXTaTU8Y3ECvGLrMwmaM4gYRzV",
  "key5": "4p4N5uRvs5hsdL6FYQT7V4hS9JLAfyxEtiGsfz1VzxWD9u1yZCX2yZTwFSqG9scbnzYmdcCJUVDRmYFe96W5GU8",
  "key6": "4rjxCEv9teN8zzANctuBmhugCJkruSpBKFZFV6yNMXG6k1QrP52x5NjjWZrHwFP7AeHw4uLWEaY8viqiNCyrqdjq",
  "key7": "2pCih1jzwwSmdSFGcCZpTYZzTCeyFkPGqBtWEi3iZfyhyPU5MzLFK8UxneTD8ZoJddCmspKBXoaDJCmdnF6Us1Pf",
  "key8": "jX7YjtrCLXoLmMQQ6sWTSjWNJaqKeaGv6CEtr9vDmgWQpb8NE4iiiTYF9cLKQrueMAoPpHQGniPFP4khHpF5EeQ",
  "key9": "5LEc1rrFozfyMi1qUXYdQX65R9agBfohA4qx3ZJH7eNa4UMBTiYmmXdaRjFT6XEpYmAPZPgMsDtuweeU9Ez9xbiF",
  "key10": "2DCDBkeBjRQbdeW4Ykwg4FeZtzxfWrb7CWrURKSi18R6nWxnx4qbRK1w3Q3JhX4NLuWxoZZtnW92wMvW4hkrcavL",
  "key11": "bZCJH671e7Nnp64XZLE6cSTWUL2NNcbEhDFqvA8KR36uTtr2EkzKpSVPkviVm1rBs5T1JL6zwwmsxpcBF2za15e",
  "key12": "moGTbrWHk57XpkeaWhKXJRJvGmekiWePmM7dDCzRdNgLcQJt2sgjspan1YAHcyWd4Zo4JfBpM3XndrddNzE2GT4",
  "key13": "2pfs9mvrgDTsZbxuC1mWAvTnkwBS7joUkcViwXsFTtSTVpo8EzN4yr5szq8QMsLJtFRMP9PomiV11tnrc12GTCHE",
  "key14": "4eWWEL2APgTQxg6AXrqSbkbTam3Lj3v9AfP2HN1AQYFEsnx7h31yzNup8YrBQT8RZfh1evMGMc5zRnjypXfDPG8K",
  "key15": "gjRqi2pEY4ncvmNG4TgvDXz9SD3CS9mc1VoyQUsdPaJVtDNNK5Du15Ke2S72bLhcR1A5b6XhytFRuT6wCqkKqkT",
  "key16": "23R6LMxT5qAcqsTxzZDnxfKe6XwbZaMRT4SUtPgLodMRbd1cJTK3DUPn9GUDYBkuSnUiUB8Uui2RTG6tVVF6Uzic",
  "key17": "2p3fJzxjQBTUWW2r9KxHMGSz7BNhdZpLvA3zjRsdwgfxX9eXBrPLMSa41QEcaARicyaQSRJDpgbpHVzNG5asZUyc",
  "key18": "VZFmLFDY7bWShahkTJusdqFh4CtEr2av3CbUAEELCdUppXa2gmdhHoNsryEhCW8UFQB3mv3eD9q7H61YfTudHtK",
  "key19": "2JydXP6nP7MCRhASJfYWjKA1ebM5Gnev397YyjH45xkEAMKoi1tTutogFqMcgkBS6Xs1JnVi3PpYYSaLYa1GjMNj",
  "key20": "3k5KKUMA2JRdJ4CYvaTcVBtPmDhza285mZvypH1f8tPMREMKHmHcWQSAer4pyhsB9h8xJkx3TSAL9oJbphKgsEed",
  "key21": "4PCERspWvhWDsgmphytoa6moUmw7d53r6vLDTCdtcgb5dsLs8njeeaXKfBWWLooujgvfvSHKAopLnj5FxUoNPJvo",
  "key22": "3gcqef1zSLyLE855HBozQWx11Sj76uKQm2mahrEXyKQRMfYb4UCtJLmfp65TewDLbmz1sMeDP5ytyMrgiCp4hEsN",
  "key23": "5fgPtWgkdatu5xXMQRpqogMngAJ6eTuTtAbiSofUg6eXRrkD8KVBVedRZZfnbd5J9kcu9389CHfM5kmbP7g1dGw5",
  "key24": "3f9fyfZ4WmsUXoVK5aYGzcTzYivnwgYiaVsgJCo5UWUZiwkC4ihQ99ezeEjubLobqn718ca76EtatZVYZYnTToWH",
  "key25": "2cQ7QbDsiDDCRNWVxVVyQ2hbEVFfiPQFsmpjZsCYU1FRLpoiwgjWFoY9h9vom6r2Y68EMEuxvTfhLdboFNLyzHwE",
  "key26": "2qUbqX47Xad7arR22vii8DGJFUF1pqFWM3FkTe3mYsghLA9mGtVoLymoLDHtjUsPMg92wNasrSugbxWgCRupvo6W",
  "key27": "DLTCxwx8EMniYjD8ESjt8sZVmDcXx8WntqDF9n1812SDqA2ynWSsrdzMEFmMSvp5L4CrBoYa8Ab5RAdq4swBNQa",
  "key28": "5e94rqZonuKsQCtmVS1YBZJVj4LwQPFF8BBjVz5CURTsgr7SwbyPrMVEjCqoWVNFTEsJJaEVhUGYDjwB4orx2RmC",
  "key29": "4Mc56aePwhwVzbh7ahn4hDHWmkM9gLnSNEzoCbR7a4zbwpnb2oT9c8KM5ZPSv2X7mYZHfKGmRqSqmaJjd5E5nBJW"
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
