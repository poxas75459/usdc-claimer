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
    "2gSPmkXyfeMpELGzz2WQHPvSSr6EccA6Zczb4W8vRMa1eJqN9Ee9W2De7J1tqTPxTuuRoYg3HoWEDpp352SaQTKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GyiQC891ruSY3matCvW6Lns1pbqVvVdS3sFSTJkotRHvEfxZPcAv9F6NCooAx9QCCdSbaU4BQGKwm1ThEFBEDpT",
  "key1": "3UYU8WFQKx9HbuPhZWye5AQGBXDGcaJweQWoNqrhmfE8N3rixujcJryyP2FofRY4vPgzyy6z4EjQEd95ocXLpTTy",
  "key2": "5J6noLfxovtMmVB7bW4RPjEgx2mrMVnfp7faShrP9TyFvL6hJS1RT96gNxJkKge7V1gHnCtEBbjEY1g1QC7UUi35",
  "key3": "2igpqeR1bPvbHqmmnJ2uvHLc9cPaihjAxTzGAcMg7BJwy8jV38sATtPCWnGo4ZQc3LXyPtgvZWbeVUvhbtPc12v3",
  "key4": "24DTa9yC8kep5GtdpyapUennrU7vn137XiAN5RnSZpYmR2wm1DqwGHaTMteJTAJoUGPbrs5Fhi2VEG3JZ9ttMKFj",
  "key5": "3pJH5jB3qKHBSKrPnmvowtcpsd7oR9voYXdiJq6tc68dhZjAgpvgVvbf892ji43QgpcNDZM8UVr4Yzzk9U8dPsbR",
  "key6": "3rzUAsednNz6PhtbBsUGymEEjBMgLHMRu7PS2Zmjmy14MfkidVALTUs6oVx5ddxJm35irLCLstkwkcLepdYVsn1f",
  "key7": "59nA56KYfDzGZuHG6o4TkRzNrKT64bRcXLVM3esxUTrUqPkQhpyQ3uQvyYW4RQ6WwtnNh3nWamdfgc7RkJTJ6Ccf",
  "key8": "5XteCAnap1boi5z4RbUwyjyUTBAgQU6s3EvW1JcHLmMoERySBRE8HkGKqktfzrXY27gTGrPY2xumzJrh9eWf4R2C",
  "key9": "4Loqbnv7ZKLPfWVhWit5qAH49DJSeDxNZUnJ4FZ31X2GZR1yswTAxRsfhQT5SaHTboSXCDRFhyZrpjygM2hbzjmJ",
  "key10": "52QDAAs5tdKHFNJkb76h9CsA1ytYT4wUPPpBNpLgMoaS1brpQQrAtF3gzr9itKV8zazDwfwRZkXPZSZwLFQkrQQn",
  "key11": "5eAkxxnqNs5LnJXS3EeSx8DSNeCzoP5R3ai5P4gDyMqxUfggHYYinwUQUpiJtdEYkaYVi4CLeLXYgmEBFABLJVvN",
  "key12": "35pMmPkZX5y9muTBHyFWeP2Msj7eurzcLh5ijz4S1eiWD38YdwTyJKK7rW5mr6WwsSXuzFQrgShJkX8HJpt2Hwg8",
  "key13": "4dUc6XCYdj44GkUCUnqR7Hc86af7dwBrSP5RSe5yp8fNVs56JGJsPdwLzdqynskp2hhSnCDVqeMeZiTWws3dgR4Z",
  "key14": "5gqZR22Ztraze5vjvWCm3WkAe7ocxqxHuiFeL9MUt7iQzn4Ag33PMo4CvYjPuZFDHcsZ2LPzvWPw5c2pXMHPyQcA",
  "key15": "3TBeoqbMNJjrhxB3GF9SS3E3HjFtQK52DfBEkuhYmLNpoQtkztdtYDN7aDrnz6qK29cixeV32Fk65NyseKvPMbAn",
  "key16": "3ZGmQHrrVat7Es6aGuL2aXxigEYzuZCXDbnC5y7cjMVMv6uFfXdK7k1zUZfK69MGrFULgsaswnDDAYCGB1sM4XnY",
  "key17": "2VAAb31N6bf8VQQtooR2FTnBpohzFC2VigMqYufbs2eLTBj1ZBnLzXdbZ7fiE3pPjC5kMmw29SSRwARkjg32GSYj",
  "key18": "281tpJ9JyLZSJ3GE1rhx8McefaSRQgwSyVYmY5cnsFbt6XT3dW6mnQ4tCpFw6MXiM58jimXteVpsSZrFPELPARge",
  "key19": "doidkkgr5qjorhBaXtQvkFWitQQ32EpCBPegk8FAKnZuD8zG4DcYfxcVWreuHvZoVrnCDamMMCGeSabPPW1Vti1",
  "key20": "4hZQHiR6ePLT9PcEFeti527fPgJhwmdLKfLbp4SYLm6n4gz9mdo4S5tWQRjMCk3c6M4RbDRinfCJoiwHgirfdFXF",
  "key21": "3VAXc2ATgAyvgUPo3aRMkByHBA7nFzQ5Vod98dsUahhj8H8DK39rC2NsL6CtPZmZm22o5Cs9UE7izuea3NQeMyK2",
  "key22": "5A3EpnSmhcGFZk6TFDuacLamCNu5oYM1ve14Ad7FgzKmwPQ8RArmCq37MYPJCNDQ2SDzccHp5zjMmKtKQZT3YS6q",
  "key23": "3qcV7xy5C7A8FUtVrUFhvkdEUqJrsCjmzb86jDbLV6gbnkD3pCXQ5sdNDdALP7ApW2uBr7qYFST8MTowNXzAbvbp",
  "key24": "5reH7ZJU6jnqnvVcrA1dLzRQfWZLfypx2oPGkihVbSyTtvunygFvsJDSCRdUqbj6N1WbhRneobaEjuaFnbey8xeD",
  "key25": "4gHLXmpiNHV5aKj5gWj5uLeogVAWRdxjyiQLBTxVpkJjBaxqo1ibb6uR5nfB8AnARJ6uKtYiNQXr2pAFupcX4xdt",
  "key26": "3JYEWiXrhgW1XMWfSaT1imczgGE5ju5jwJgnkstMToYfkErQNroCqFZxYuBk58WMUXNUZsbHs4ofNcRrtf8kAWSj",
  "key27": "4zjPbkuTXKKA8725Uk7xRkFMGqKpdxjyiioKeDA13PaRnUNhJpghg4JCUxhDwH6skGQxj4F8evKoK7dge7TLJtV1",
  "key28": "57WSkXjXifSzDhk3U1KKtLC8ZKNNxV5xDw81bYs7xDQJWxP5kWZLxrTBJEiwHUJ6DRmx5UphskEn46RbmVv7hfQk",
  "key29": "2bbRC4eMMTnZ99VhFCKXEK1VRWwHUYVBhAy7vEHyutmxJJXUiu6xk1nN6dmoiNj9TpVnq31TquDY4aVFTAbCA3qm",
  "key30": "5psViV7tXsTWjQ5BsXx86qnFjsFsKoirxFhsx7tQ2pHJqXHafCh3oS2HCSnZToJAyxHXsKmVGWXMYub8TLhhid6P",
  "key31": "2nHsx2reSu7xmZVcqdAK9yFbJ6MooAAFDTgmQHqft9veFmkK3HjE84xbajSnmzwtWH3hUBqwtz2WwuDCnBtmfdNK",
  "key32": "34XNBh5Gwpb2xXUHPd5VS1UWGkY6ki3Jg2VQtBqYjEbpjFCX3rspJsnzbRZx3WPxKKKQaEXJnCmsRjnQaeirqsJJ",
  "key33": "3uagu3Sj1zLjNsZHsyQuRxyhwmf4yMYWE2bjBo8PhpUsUZ4NYMh4vbiXNZeiij5KSdp1GmtKxmgDUP9jWjyzajjX",
  "key34": "G37XAktFDGJ4tXbT2jQAW47udjJbf6k2fZAbEsKmpSa55YPVBL8Y7JBSoC8UXzBSBU4Fqw9SJjrZx6z1JKNNFwJ",
  "key35": "4VgUoWAecjij4zfeoWqQyjKJfs1ZPzKW1kvy31oDZJM3DQFjYg26c8mfNbgYgcvNXw1siUvb8X4EGffeBQbLLhwV",
  "key36": "61UnFxpHxrgk1USdZKXdijKjgkcCqCNsiCuSxcd55BNZjq4aHgY8hMinUViiKu4ggKWttqW2VMZwMrg1P1RUaGVC",
  "key37": "4wbmKLPur1aYSwxPrLNGiNK2WDKfGVd2iskJxV8RiDEi71ZbCdKGZ4gFQULvNHbCQ2UVTBKhyArCRaoM3NESpQjE",
  "key38": "5fPaDwebZ2sSVt3THdV2PwXWGownR8aY8kR85D54KB5jTHQDRQnC7QEga7dsLpnUZ86q8REiGhFMrZGhnAbq7Nnn",
  "key39": "5N96W8GdY6pduGeSnpu3htDeUPb7iYas58onCk5tW7K4cSBmUTmbwZwSmdm9TkaXjbyHt39bH7CWPAFrDMMpgeGu"
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
