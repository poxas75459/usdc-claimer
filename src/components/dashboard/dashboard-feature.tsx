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
    "25Jxq7wCFeEyVhuQrtZrSWmj9aZMszcT4Qv7gotKhvVVZvJzqyCyYCtjuARbCBAdpJaFZu6Z3a9GWBYX1KMMXnGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cneUhJJEr8z7VrzG9ghZ8ooi4F5TLdMPCHQcjQ5w2axks2gpVuMf1E1cBRSDVodYGMaq8feXsNdbjd6RmafLoia",
  "key1": "3543cYHjfB7GzH2qMrXHsjcEqvd1BswEaCa5iZ3tvgoAoD7asFZ7WbYHbj7qmn37vrjLm3q5UnbfVr7mhjZbhmNh",
  "key2": "5kbvD4AgaxrC8SbVW6miiV7ne2icNkV1bexRQg2eHAbF5bAKNqxRBnPJXTkL76uBHiFq8icQpgCZMUodxjUJ4mvd",
  "key3": "2eqeAojCa3EkLp19NJDd8hNZL6KaDTZVDBxFaMJ8wco68isp8h92wY45ndBzaJ3mKh9wTz6hrq7xg2gaQNWKDbVq",
  "key4": "66QddrK3qc4yRMLAofAsRjkD1uN6pbqBTFv4uMYq9cDeRzDKQ3odBxndpSXdiYeMnmdifG3TsWWCyZ6et2BjyR2M",
  "key5": "3fPQEQiiPfxkbCBBEZFhgUc6FiYcA7jsw3KBCRxgx2yD7vCcrXkGjLJAupPmqSvaVSqFYsQWCV1pJzwQ4hfCp8e2",
  "key6": "48CCsyMh61MJBe7ub7U3aUn8fcuNSwDGFki9j6WkwWP4ohgT7V22NCppGHaDfXuMayv4vPMNWnAT1bd2dZYnmPwP",
  "key7": "byYvREpgmQdXbnf4Ts96cPk6ySyDfwEx6dqrDPQNqY9wLDLYaZTAzz2zdunTuMoEMDGrRhyf2fD2iwoFjvNjWfE",
  "key8": "3vhNb6N4cR91WX4yNWKYMjbHxerFXoXiwaioY6pACZ8e4C4xmTy49BKS4WD8cCHhGTqdaKm4WJeW6UJFEQhAxt2J",
  "key9": "3KVN2RWot2UzoCRREerWMHjEcTCjWLjRG5gXmhdFP7t6QSZ8Buso88LQNc9E24b4fuBr5ep4u57f68oRihDupDYE",
  "key10": "3CjVdChziY2LeVd3SZhVErKR6ZeBBvrtNobrUrGwSaH1Yact5nunmwb8mwKXMssCezpgJpSQqpqbBkPRM7EsAMbv",
  "key11": "4brok8AucWbQyJjJYvPseR27G46h7ZcLGrpSaBjE2xRi58e8jpGWpkcBuASJAFWHEBB7aYTncXShdD13RAC3V6eQ",
  "key12": "5TSrB11ibGmVUYdKk83878zTvrTPoW3okRpPWZ3jnzoxAebf26Uss2zsepc8QtXJgKDbegyZbJ1GqSEGSpvpr9Dr",
  "key13": "2tUAP5QXmyHxK7R3sxaFE6JgGsvQXPaAS47wt3AYoPttKJRePZtx15b5K9MC3xLYrnEqkZBVtdQyv5oiqKeQRKpG",
  "key14": "5DV8w9SunirS57ENfMNve8w3HioM63ZLECHQPYFLHmT2MfgofC1ctdHzezXLamfG2gJQJXdkWugwuHmveARz2bq6",
  "key15": "5xdWTngrnfh5p9yxqMDmP86LefYbzTsnsWmKAr9ku94UG4D6SPSEVKpTEyNdkuTr3ysSgPgXXaJvF8sENoMWUZKo",
  "key16": "2FiiM38oP623QZhMXd5W6DPHabMMbK2q5WcdBYjq1JYD7AvfbeY5qptaSkhCqSrfXSiqxFf4Zp48RW738erUzZNx",
  "key17": "4bci2xS4TzWGTNgLTTYrUucyr9o4Mh7vKRonMXmPtnnEFAYEXNQ25rDew8TwtdNQJLLJwbzNYpNX7PGgr4V1Nkn7",
  "key18": "54iQEt895TfaBmyo8hqh4nTi2uXFbVRku8FduBTsVffvoXcGZTrLfPD5Zp4Cap37b7MgfWDRTNJrYDGWoLz6h7UU",
  "key19": "5zNiPjMvz1kXiiK1bReno9JCunNFgReks2knSWTgoFDffM5j9rAjtXp87coCzjezJQAzfqxkSvbSLzviht13WPWT",
  "key20": "34kzWGFox97nGEwJG6YvB6znkmn5C5KsfsEF1MZb6gCKCj41LYvNuBmiid9f1QWA1iKqTvBFF2K5Sr3QUEZ1hv97",
  "key21": "3GY9NzVWimkqaVQCmuENFJDt8r2KP3XJTyzCyESSjUEUneTT5s8kzFN92kM9jPWi58h495CJV8NUbWwBTPwZyriS",
  "key22": "5XyLBXNDzm1mpw9WgxCumrxLYyy4spbxdMfXwcqgGdxFYMWbzvs8SL2BTNd35iYgzn3197dT6yvGjGNAarJ8pXUo",
  "key23": "23XKqnYZy6xHZNDf3SVGDzfwieaiCKGnhVmmPz2yRKkmTqd55fz9wSCrJfkeQJHJGixSizvFwm7iV2VneyuESXVL",
  "key24": "3MaH3dbhNWPSuyeQA4Xhe5hmLTRqVFuwArjfSa2Et96cfSYvRepnmyWD5Pnvm8JBbG59hjKHyyghq9dxhEtLZ3Nw",
  "key25": "3AeSsXnN7diQJn6dFGW5e3DzYxRpqQfi4zmm5ebbYBqx37QuHavw7xn5kb4ugPx4bsPinD1eFsgzKK15qD3asdyZ",
  "key26": "tnQSthSryYFpA1oQPmLhhTkBtdmGscmnhpqbqvKEQpkUe96nwRBhRaNDPSGkAVhizUSmPGRxqzt7jcbP9QnhTHX",
  "key27": "4NctBbSAs8d93aKAiAc2becDNSx6uMJznAvheq9gr5BdfXSsMSWMX3cuKLwejC2G1TwPv1oB98gScq5mGjo3uCQC",
  "key28": "2q8U1tNGi7fBH6gq1t33sraTpRCjBsXR6Xwe4GGfpjLxQKn9c253jawUC5o5X9Mfe8MCn8hNUUoZbM8YgHq3w5Xz",
  "key29": "KotwkFWwXRn4mZmYteeP1tWfsDKkRQzXq6MYTa7xUHuH9uh7Za58YY29qzsdRwEwo7KEqJNXXb1CyKF6ebwgXpu",
  "key30": "4JRj4CRcp5FXr5a8nrC8XK4EzUqtDsrevR87f5itkSd4EZrV7tAkGwCutGHSozpB9r4V3daVGzLQhUfN8smbSDJZ",
  "key31": "4VpDtVK2LE3WDr9UffPrcBxkmonhK3mHeG1eDUQdzMKD9r1iKuNPgqDqj2ey3MKb8woTv3xSLKHnsc6m3VvqC4Fo",
  "key32": "21rzHkcuMELRaxLNkVfGD77mSsGTykfxWfxJTRkTBv5eS1jFF9EmWPEU4nyYULyxw8AMmjv97c1DVqq4nJdNuuXE",
  "key33": "3351t14mjjN3G6xVuLVy28iWKdYnQMMvtQ91f59SRTVmYarjgh1rb7DBJN69mi7ADf2wmq1x9EygJ9wYVozSswVm",
  "key34": "2zcbnXHW2F7EsBzGL1cRiJVGsSYdMwPEthy1yhdHkQbo5pz4Dt1Wsjpa7uRqqTbE6bUSEHxxz4y9Mer7rKyyhow9",
  "key35": "25KRKZmh6DWAWsYub2ejKJdza67QhJzPgEKqgoBqVUqCgKTkfMt2mYH5tDNjUwzAjVK3XRgFN6XoVk3x7JRB7k2x",
  "key36": "3gVEmomrGzerqhAKMqyBJNYBwtcdeZgLAQEGev7m2b9e9PYafNQo1n5BJwL4N3YupQh3BpNtzAqQtmSsoNfGsaPd",
  "key37": "jqtjm8X7qVRBzNdW4rUiqVDG6ckEr6RRqUw1gSNtDa4fyqLNr9SAniwy3bZXKhCh1myuqXN1pjNvd2se6NfkW9H",
  "key38": "ZJsKhmwy5VoWkEhviaunMh8uAK8PytFZra2WUiRAbmw1SPAgdYFJeYi6Bs1Q1gQuJMgpyNXPiPFSu3YAPR7qVHj",
  "key39": "5CxD3PNYkeuvHWbWNGwKeDe32AgHuxA7WfcsyUQJxQavXCb62FFaJLLz34VL6R7DrKcEUTogtaKqUyvU3KWnxBEH",
  "key40": "52a1oiesGdMvepgtPoogd5T6a2wfg9hWZ3XwQwgDAeaiX8DPyJUpVRc1whZwnd3yK4WpSE39APqA7ApEpA3WigXc",
  "key41": "4xUDwzZJ1PJvyu6Q3HL4hzunAff6rJpKmqU7tnNTShdUt6C844z22yq8jUFjaFFg4XswR5fJpFcSvWd3crnGy41c",
  "key42": "2PHGG4jeYWLKKkPhRbqqhrzdF4jRbBJXZNMUjRTr6uHyJXd9c6MkRC9PNf81NFEpFeB5XmMiNnzHvC9RvBNd4qd",
  "key43": "2MFRwbmCu3tVz6qshft6DG6LdVo9CTpDmVQSQwQuJM1TnZNR6tRNh8M58rmv3HHYwQLgh2rFtds8iYPSf8VtkSvM",
  "key44": "2iMQ49ce9fzRL9rFcAkvWs1dHKvmmcrWcFxM9RmzVdAhM6UvDGf1CoKciC6NHmpAQyMYgQRK7qMGmMMCg2875QCb",
  "key45": "3aEKzyxbXeMx4TaXfoV6R5GjUtU14rYgK2tjEMMLkXt8ktPp1eMDsyoRTygjAsoUgM8jSr9cyWP3bwqvPqN9p1ix",
  "key46": "5jq44WrpcvnHQ89bLFAqScmehimorpwKrUcMuLDo4Qdm6eB96R9NarJVYa2ysfV7pPeo7bjhPNU84jL6caq1nC1C",
  "key47": "2Yn4ErNRrvBzUe96iYu976Heu4Ke1iQHtHGnNArVNf1jH3JkR739qq9FcuqxmMYUnMbifSxbhQWK448cr7SWFGMG",
  "key48": "3jEgdNqwPAA15HspjnLa4XNssrSb52C1WdM3mJeRb5tmJL1zJRZB6p1PYC3LcTWz5p3xkLa4f4AXJaVhtCS8EiKM"
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
