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
    "28mVJENajr9zLDpmTjqA5qN5ZyfBu5GM242tMjpHjsqJtJ2ayjYsqBr7QN9ypoV5wxqoRQyUbmb1ko1oaNdjxfib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfwoB88teKTKB5dJKkzkDux5rj2LGfsqRr3eUM8PkxtWadSWbapmiesrxv3HXd7cCqgTXwzm7YDS8qRonGsJmvz",
  "key1": "2pHKQYyxDkSJfPTD6LJP6iB7tRKZJprKeh2yMCPt6422SkHiq3se6gFWXajJfLmFnioE6hcgU7iUxkDUpHULeQBC",
  "key2": "4rbXNV1mU6P3SAXi8ZDpKqDeE9A7LY3M8oT9zHMpDSuD1vubf6mji3Pgjw4DConiNxcX5T1v96vGajRFUswegsiy",
  "key3": "tRRFfcDXuWJq8yCZXqRwmsVCz6CWK6jHCi3kaGy5kb8BhKFXmi6kD7qwBiq1fksZqv3D2dZ7pSHwU4eGW7ZqdRD",
  "key4": "3zYr27cEh5LgbCprE8Y1YjhBcEQMVrSkPvV3VSJsr22oCYRogErTXCiGDYSTDANNpkF77yo5VBKntXTtJERcYqN2",
  "key5": "vhDZ3rpP9XTkDA8SLjh7UDKkVMZBYiUbYo3e451osNJ17y2Duiek4G2UCwUXbjuVrb6zqp8KNJdCEULHKT62U6Q",
  "key6": "2V7TViEFUfAxZ9KVVJN45BLV1xR77it8wXsrodbUf5Z9AYMQiAXUhSCP14wX91PmBMtgxtiLoeWEFyLY2AjQdhGK",
  "key7": "2WYzknWzQXG8Wqe4sWH4vPkA6wVgTB3jHr2akBQhVQH1xBzQoyUM5mwFwihR16ApUfmaLkSSKe8WJg6moKWVwF2f",
  "key8": "4Rn3tXvbYrYrJuX2m2pQpbrRg3ZdCueZQmPiZoh89xg42ag3vdDm6e8TmAK519JrXvNgBbeZkqskq7iFzUeYvYqt",
  "key9": "3G6q8NRe524x9xwL2xjwC2B7PYPUCuTBmgHD8kJNyy11bbEu3BSzFRun3WAg6rp84CKE2aZA4YmjjXU169Ufq2BC",
  "key10": "2zLKzhkjPK2KUoHZpvEzU6zavYhd5JyqC39z4Q2JXfaEPHdqrWM64ph4PmwSwuxMa7McdyYDMTMiD9HJbvgyZ1KM",
  "key11": "5nx3iSf4vWyQnPA49EKJpwxwWS78X4HjycpKiqniJQ7r631dVq2SfdTdKEF2s52dvG3jKEMb2WmNzD25Khf1QKcc",
  "key12": "4Ec1RxRwHjXv5bUUxtvAqzNikJzXCN6poaXZX1ifAgihZUpXRToVZw23X3pbuEoFt71cUwoiEGADv5Pe3GXEYnUj",
  "key13": "5gN3btsrsHLJe5KaViL72rZePQX6pYYX4MHCxzqex5179kXoHq1WKdt7Dt6gj97beupzZ4PupQGK2oHpiPMLQjnk",
  "key14": "46WvF2gd4XHL2oVjsTeAmoJDA4Djaza3exZXd1rwWEJ1njESdNDwWMEAvZBbgLLhknpXyr3FFiXGax6Mh49hgVqg",
  "key15": "2SLh77a6U1KpbRdshvZW9A7aH61TkEuWWJAX1XT21sHumM4tyurG61He17Ethk3hc8phVVJ7UfpeVVrVoT4dtT7",
  "key16": "nHVDPXRtJhMTwbrXmugbVs7WcZDnWYzVYADSdNyqqXEi5RLb2o3jBNgf16tSeRkkVPbnsh1cnvJdrt6DXHsPWKd",
  "key17": "65qTWmmcLcU3LUUt2N5bmvJYRcM5gzDLGVfiuZgqawhgDNYqddWeHVL3DYqWuTeMMf5Wz1vYas386WivgpDrVc6o",
  "key18": "33JWNcj19GsxHfHrXMtuJSAfABLNRL5RSJFMgy6Djv8utKsispN597yZoDBQZiz9WcGfDxABnbe6dPWoKb3kFQaC",
  "key19": "3GKjGuYz54iRzF9aeWiv1zJE4cBxQtYFqorW93vwZd3JwjrzqcSxHubGYhm6djKNiDTmdQkG7iEbcuPgxkvYZYRu",
  "key20": "ZY4WpLhLmiCEE4unznfm7NcbSVaHJ6rZoRpjzHxJJGpL4FUw3821Jo6im25QQaw6imiS97oaaja1J1V63gEYRaJ",
  "key21": "3RSdfYMjwJPqH3rmTRus6vWtJLZgeMoA5Ht4Ty156VhoN3bauCqCkyX9UBhkcNDkHiKMrX3KSMwGbZ16U1dtj6wq",
  "key22": "3Fsa8tCoXUsK9uACYtBHEcSugTE5HcmbS81s4Ut95SgG1TiVE4nr4zwfSvyJ7y2SbQAWisFBXxXt8PKDUhFGdWSJ",
  "key23": "2cvtsFtP5c89XfBHGBUVPVVbNdDZnmqAv3UiX2TQTB5BwmsbjCefALZbJbNihMdaH858Hme9TR5uvYKkqFcpnMND",
  "key24": "4jfoREVXKJFTcus4jMFdyR4xBFoEuKPBY7eoLuEV6NA58QDv54ZTxWfChSUmeuk8z72gvchGBaJfVEmq9Rzm1Yqj",
  "key25": "53Xrm8mEY4JogvnQt8383EZnztwSDMDvXDdjM8frkrk1TewM3uscbFnruZhjvjPPSKhwih6RcnpZdv862yJewwZD",
  "key26": "5TUsKrBm7UonNjCViWXTttx34E5P9JKbAmdcz6ChZAvYbgWNoCJfnLzsWNhDuLm4H7seB2dXcYbbL3dxNhB4FVRs",
  "key27": "5PjLBjm2WYhFVTXMj5AV5Wm9xjkGATBXPFamzooVDmeFLTwsaURSt4U4x7bhVM2mxV9YX5ache6HHKcXdvmkdBFR",
  "key28": "2AdjqNbg1GjG4XBkwxq83m6tvHCFkWh6gg9ZP7afX6F8mAZJ6aXQDpZWTA85zc2LzitANHxBzqhwUwd7uFQviWzM",
  "key29": "ymNKvQbfroaXxjVZsgiccPnCMSRZA2QbFnhptZqoWyvXMStQxv7et4Ttx2fKj5jqSjQ2NWXTJ3cumGexgoDQFxR",
  "key30": "28yKPPipwqJkdXm66tgCAadRw3vdadaysDmMM5GezUQv2XwXHM1GQEid5X6etJg4kjEFj4CWVHA5bSAQSTSxW8kr",
  "key31": "5Yt2VRVHNhK6e5Wx6S9j4zjLuT7ejZGVFPETdfivoifUDULZYWvZDLNGR3YsH3MyE7b7S2RKRqgywWDvuErG1YLc",
  "key32": "4YNfMQKbedaKZnYkmmmpmkfBNwWyPtz3So7biSoeNj1MDvBt15ZVq7ocQYG1W7wLjbjvCBseaYakL7sH7jnBJJB6",
  "key33": "2vwu9mZfrdGsb9QDHiT3yDF9SjowCB2kqzcoUQCCD1moHCqeebe73c27RYPByA1VwJMdxR8wsdnYTkdRRjhvcsWr",
  "key34": "4n8MY812xEeziFq4Bga5yxxGZ84dD4WRAuqAbpCCFMR1TCjpNfLXktZCi98eiSous3JVfFBJw2t9e6cSc1rjuxf5",
  "key35": "SHDRKeKj9Esh8pEtbN1CSj61SZFWmcLdsp2eg226XfDoUTiyQBfh2xG6iwxW5sm6rXh2kb2qi7pBU1U9SXErTgK",
  "key36": "62KauhWDGWCmenhYwPLjDmQr9pSrkKKGbKJHvXYR8YJQtqqNWKh8kA8QVPWYmSL2bye5oPBEPD4MNf6vDLBumrxw",
  "key37": "3aXFtbPFw6oqKnYSVtgPfmCgHVqRAup7AThETd52FiqZgpgctjq4d82QfaPp8CvpHVGjDvAoEsqnYa3zC3T5FqFv",
  "key38": "4PCmr7cGeQrN1JBCrKzD9oSK4ZtCXD8UYVGr38cbRGLPafS9BFCRMg1PeSAGY4GNSLXxMDsExuhHRRRuMcT7Xto4",
  "key39": "7QMuMWriKzFLxHh38RW62GhLM1cUD22k2NiUivcLLPGEjmtnHePwerQfjeLmdNWFTFE2RmJqa2uFPECc99xBjkL",
  "key40": "62eyuuWG9zpPCvEtamLKSvUMLfZVLHvae5YpLjRQ29hEeJxyDdo4D6cCqkvniS7naUN6Q5bGdSaP6J1xQ39Yz4mn"
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
