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
    "3f7rpZ5d1GBzgpqFk45DUcy76nqdFUGXZcDjb76Lad3cT7yhvasrcHzBJVsVM5drnAt9REx2aH8hzeTnF88jSZGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTTogGaLx8B7pnCzMwuAGnJWGHVemEBJN5ySUMboeKnj4gWzqyMoLFdHXqhQ7U9QfoYz3ryR61K85ePb1YiaU4T",
  "key1": "64QhPUjQn9Cm6dNtvaB2vDp9dbAPVnyXrujKetPkvrB1LGJ362ybQsxHYK83wBDQtc2u5tpfwPq9iFDFQnf8pJuC",
  "key2": "5vxRV4Ew1h2AvubhtBf7Uhjzw8DgRe1oK3GLL4JgNbuz76Qy6cicxSXhdvWzXrh9cPWMgJ44ubM1UaYbUnnd3Eof",
  "key3": "4hLgib55pLp98STi16zvMq2hP6CsAej4QeHysugXqwdm5bsmWqykzyMr63eo5fuRrc3uWbCCNhwWDZamngEXdDAg",
  "key4": "3WUD6rSR5Vz5UWBU9A7Sbo5fZQDCbq5fTGrJP7nqYr4K5hfaLN1LwWc81C9AT8qeKZYSgee1cjzk7XvLhPz7HujF",
  "key5": "3ZC1dRwxBGEraWu6P354ef31ceHPSNgMK6SLQszkMtFqiAupspG5NANJD7syWuiVF5NV56KZTswV6HVVkfMvd22o",
  "key6": "Tr7kupPs5KKTMzrgxqLYbTmzyQt77g8a49kMtK3nQhaEfWWccRXdK4tcyR2HQmK98JRL2VAhrqaVWmhUsNGd49c",
  "key7": "41CbuotBxpK2DDXhB8Ngvg9biqpgVmWJsQ4Ui8nyAd41NwwNxe1GjSQwTAwuPJmGqgLRFgu1ToM8UM1Xy8TPSdSy",
  "key8": "5DpnKxAYnfced3HpPSHvrXsPkuyk1c7t78gL6wETjfNCPHYTEaHcRRjnETWRxpagNWjbHEomQ4u5fGgQGupb712b",
  "key9": "5PwfB2NtoU1LydbE6k8pX5jGApCPvkaiQqZYdrQ7qWEEdUd8oHiyUZ3gyB2if6sBbfgQZk8phmpSrex6H9Eb3XJC",
  "key10": "5xX3HvfWbswqM1EKnTgVEXdSwLBze1deuQF73HN2MM64TMiWTfn7tbtqb8EYgSMAPdsig8jnPfCW8uFavY1L5vcs",
  "key11": "4n1AFTq7ni4k2MCrkvkRMPR6u7MbeKa586nB4iYAHeFsSj8jtsyArpSaMT1CmY9DpQQKa2iNhbbKJ7GcwDLUthn1",
  "key12": "KoVUbjjoRxyPcZ7qHrjV1BhNxPiFbBUhXEkNMSSmQhEER5GSLWT8K5f54L7CvvdBMaUtx4sDQTNFxpjYoYEAzaw",
  "key13": "4SRFk4Wa5PE5VjzFXAYnKCiDtM6dE7fAm68s2mRH1EBLUryxmGrhkTL59wC22kLQfoUURaci7czUJ27ThbmNpeT8",
  "key14": "fwnhD3aWYTs8tqAvd2FDCf5k1AywBYGtUM92e2wUuMnmZgCh6yJ8xtXscwBdecUmCEwb1jJP7McRzXRyDgjS4T2",
  "key15": "D64guq13dMjk5zujH7FW7ep1C34X6VtSq6fK7RYudWuP74np9c2JBLuDPaNZyW2v2XGGQtikrQnunaWgLkietGd",
  "key16": "4J2gQmkjyefRvWmSd1ZanEaEChQyg6AKHekgbsZUEUzzgL9bB9VooYRxySCvpUXh6316MLG9TuhK2oNdPRDyNUcV",
  "key17": "5X2FrvFStGnT8A2i91aiNU1ibxjL5fNtZBae1vWYH7Y9MXnqWGiFsXiookXTdJodJuzXqH71UivUU6GNVrcZJHm4",
  "key18": "3w8mwdNvNqbirfWqRpTjBHy3M2kgsLrSzRzvtpr3KYoxDRE9n4FffABx9cfUngLumQ5mXnPc1LHt1ZNLG6b8Rwmz",
  "key19": "3Nbimx1g5DZGBsDgrn5XGXbvHJhVEfihJiSLGwBnLcA6jGBwycFHjFa1G1ptoxkPEHh2Lzeg3X4Lt7oB4Pxy8E7J",
  "key20": "5dfDp9kjbaZiHRqrx9gGuxvHxAi3nSSkTazkoZkUk38en4emCu8hMsRHQx979xCzRFannPnjSXRboe4FWBPyd4y9",
  "key21": "5bpn3ru31KZ62L9srkAVpW36FKWMi5ZL7YUoEW32Qmn9c6j7YBFMAyP374JvmPnhDoeLYLXpeQesTiU6t4YLEZxm",
  "key22": "43hAKs6ZMoHghhrpw6xS7PoGFDDV7NoDFcWcevfSVJ93KN3QJ78YyaGa4oMFVi4LczbnRJEwE2DVYjTztc1wo37G",
  "key23": "2S6xYUFMSJ33y4JPkWHL3fBGngZ4Uo7gNqHLdHv5GQN2gknznr7SRnnF1jLjgn7bawaSKPgHtMgjUhhjLuPytCiT",
  "key24": "FBX91u1vsoFgNPgLTkwju91o4MiYGneHoJrmg1oN3s6ZbEnWamJTRCLgwn1ZQZo1Yqe8ZgXemfpMUx49cBhnTiX",
  "key25": "4LdMzgTo9Ey1Pr3wNPTbc6BmP1nNahXUCjM3PyNq67ubonvrzuKtGowuHw3Dqt3rrW9bgEB2gmqDm44a7MPjaZpt",
  "key26": "58AiAAjbo7r4j85BLdmnxHnqizQ39VLnVv9kd6vKJ8fwWF35S7mZvMxsrshW8otCpandMGnUTgSqzGMpZZAm6k3F",
  "key27": "5KRDXB3Y73Y9fkazSTeWcvjk7nG9xJEf33LW2qAnsxz3VwVCm4sEehSLAom2gVhgLw2vf2XM4CvNKvJtg2C8ZiPB",
  "key28": "WwNwduqAvKuubZr997pVNHZDGE1mZVzTcfA6qViEr6XNmSgcXZvLew1jAzQ9tgqBVr6Za2vw6znsmTBb3Yy1bNc",
  "key29": "5ExbzxZ7ckHL7sLuHMdEgfNj32S19tmDYgiAuLh8MmVjBHMveV7nReyons1gWcCe6rYQkoZfjzqw64TcSyAwLcv5",
  "key30": "3QVTJcimzbcfgaqNb6hJirzi5YkKziCSoNXP7PvbbUwXR5GC2pZFJnTGjXXxNhe243LXscx4eKdpNWbyHfhDEq4t",
  "key31": "2ES3awgD1Py495ofZnBviqGJNRz9jW7CY8VivPpEiGFLh8E72SBwWAjNomk2e58PTukcByfedMHFPAdUnHQcQ8bh",
  "key32": "4xquevjWpAPgp1SrDwC1Xy4BPS7YGTKnS9eLaG53FZnyR3a9fXsEvre7xRjo6MBdNSnaa6z7zUFcZCgHtjEcrS7J",
  "key33": "5JKzN253hengvaoRg8qVXSsW2cmPxpWh8VxKEkzQdo5jFUnYQwegNoJvSAhCzmUyRHgd2Uy3JSYDCbR8CPPbCrJ3",
  "key34": "XRgGo9b8BDHpvKbZ1jCCNdRcbn6HLodLW8zjNRM4FjwdrbaQ7Rr1ac7R1gmUnRrD2dzemCJ7QTsSw2vpakB4DLq",
  "key35": "3WYWsjAxvzFy4kDV3dWczmVPbNgRwZjFJ2kQGveRwcMeXpKjLCNLww22wkd1Zt5iiThWzP6LVbCv2UNK3s1gHsKN",
  "key36": "3Twxt5dJSQreNpG9G4YQZE2nv8qGb1TyTWYvxVtmu3iwb7VvJ8WsZW2Nmxz9pSvuHhZbzhD7gdygBLZT6DEoTPhf",
  "key37": "3ZEGctUkyevwSFPwUUWZPwLwJELqjaVmVcntvSvtZT43Ku6JqPTjcBhgSiz6uQv2Y71d99FtVmdcRjp7MH9WRtee",
  "key38": "S8peAQ11oH1bgW4fZgVgwVKf5GKS42ivn3gv69Gvth3Y3jr1cqL494uMbfXi28CUnVS9z2x7oTGNpjWWRFxdEZk",
  "key39": "48sxE3KAMrRoGTmPfHbp5LH8h4C66BNbqQagXJ7amC8xEwu2ttURGJVhNbjJuo5B3V3HTtegkfixhhtyFEeYUsB1",
  "key40": "25T2CkqWBzMocyWssdWr8dLDy814WcBy9AzXob4iBegaD1oSV6Y37yf2zd1c79eRSLAeEXTPR1ExFwYGCEpvY2WC",
  "key41": "3x26v2wDf8hPqHC94gk1xQ8mMuJXwNsJSxGZog3aQDU1Pd3iNhM87UrzmvYQx6RqSi4DDXDSnEscAyYD4n5vFUMa",
  "key42": "61ZEdGHApmamu167YCqcyjPkQv5n8EkuM3H5PZhrYyMnMW1Gk5uj92Qm4Z7STWZnyD7p52ydp9mNUVHXWm76pFd4",
  "key43": "3HBGJGkkF32PnQ6d7N1AvYnxwsHXN1K3gt91bTwQBjuPgNcH98tX9KFkLsVVist3nqKyHPTeFAn3oTvRHPR4Q73W",
  "key44": "5ovAxdNCYkWYg96QQLM1aqNuxY9978FKVbii6tGEDoQgiCp1hgUKfJu9mzcTD2KJMyH6oaiukAmts5RAYLpMLg6p",
  "key45": "UoH9VMGVVhEgAVC8ytuWaUCRcVA9cWAMEcLFTFDRRU5YN7uACWxAK6Zb19ApqAMEYzqXjm6ucTTrBJScGQPvdYC"
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
