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
    "jAktmJ6Kg2Wonkr26v71vhbAdJkujyBGAv5wZkDvV7KHoRxBHSC3fp1Gr3goktQJD2xd2FMG2EHKrPttHAoxGYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MzmXuWMGBDhwAZmH9PdPgcYdrA6scxVwYFte391mRpSpfzDN4LV6FJbJCzgDvnj4ZkHh6YtxUcy8detjmGWe4ri",
  "key1": "4eawdbVTiiYERdcYk8ojoM7AeqyWpRs3zTEZy7YcPFF8aTj7BiTsLe4R7UnzQ2TUW3WRtV1GwRxfzDmv1hUDiyif",
  "key2": "3Ubt61Gzyaq41JGxe3yBSvT51a3ojMcmFx1RAo4bJMC2CEE6nhQNWr5r3mNPo5YwimagnURRqF89HVhUxJ8eVgQX",
  "key3": "3tFDgkRxzn7vbNZSkpEjJgGzXsmb5e5jKeefNJ7iUaH2YFAX7YyhZc3MBfYuTXJFQBSfN1LqSTuCEJrGbycFQq6z",
  "key4": "3FFbBCpew56bhrUxAASPTKxC5PTtTmexQruR6faHhatPtMgoARCe54nGxcfhYGNKxtmoR2A1t6uLoVRP8MEy2FpT",
  "key5": "3tiqHX8xCCj3xQ6NRT9cfScoGoLHH1ZFw1R6mVq7UXFRxQViLqbtQutAmqP7S8BArELt8c7QCvg71m8KS1VU3E4B",
  "key6": "2gFVsHYNH8f6DiRY8HZnC1QwJqrvgFTtGKrUnzoCXpefMTVLNKvfUsDVUHroV3ooBCiaMnAXMWSwjXQAa5gffWdj",
  "key7": "3JHGc2fAGMQvpDp4EsQoHR9jePYQbvcATbE5eYm3KAzxJ21QL1wZyVbvwyVbcXmsRmqBaj7rz5s6p4z32MPaSGHP",
  "key8": "5K69ULgB3zu5MLnx4WeLCwQWo9zW5FiBRqKWqkxKRKFQL641zaGKuptWiMbsgi8kV9e6VfC4VQrvNNzHsopfz8DN",
  "key9": "3S18539jpSTdntAQvciT9NCB7ZeHRmNaBvGsNYBBqEz1s1GpzqxttgtwYC7G3F8pHZDbeVhe3DvdhzMaDQmywb8L",
  "key10": "4mBRzmsH5uiL773TLDaW2THrJPvSDZG3AAoJiyQST589mS2WSeyLPJpU4ZtRyvG91FCbQyDVzFmSJrMRK1L4eni",
  "key11": "WH6fJnRj3yA7zkVDNkwgUZSbqNuU5EF2cwR1spYKKuGw8BtQhhicJh17JL18Vr3m9j5GW71FDnsD1Z6rNZJJTF4",
  "key12": "5wLi6GMCTfKvhLdvCNsG3U9KULmbX264w4NX3jd1ECUkLLzZvYjN9Vk6gCL5kPmKgZBXsigjyhZzMXAoQSsVZonb",
  "key13": "5JuLTKNK1oy8QU2T4wC5Ey7uW9pzQzhEsp4H6s3jdEjGteg6Aix7WiGtcBtGKTrUbrYZes74am4QdrtsBoXEXxbj",
  "key14": "4oy4HqXMN8SAu45uAVgCptti998rFwCVoJst14BoxThHQAEkLaaTfmxsSAHYP4XQKvr4PPX9MZRY5zD8M3z1mcFC",
  "key15": "S1P5HcepR4LjYqYD4fQ7gTxd9f6FgXu5hmHX1BnrQLuz9RbxKZ9AhCz63MFNpwyYfjy6Tsj5HDpRkYTe5evbRZJ",
  "key16": "5Eqp8pKLoATT8osFfvmyiz4kG38sHVvy5ixxA3GkiWLJqamTUTh6yHrMBSQrqRcZLGP9edGjrDL4tdnc2DuoJNDM",
  "key17": "3xkckK8ReuJWiS6rZszpWHipBRADRH5FssKnArbSmH3terviaopK5VdwEfpwN5ja1S9J8Y6eUX6jW4ygbT55Vq3r",
  "key18": "3nArE9HmuBWn1toDeCV73ujULnGuAWfURejPdyrAdnhdxCJhVv6qq3ZhmU8EXLsEDsAwf7hJny9pDKpDZnRGqLt4",
  "key19": "5QM6ewWb6pDTW3Rt2EoarYeQM8uo765W1GxPQ3FLXaUW79gB18g8fGGJyFwaMv3Qh8fYRg1W3dfBBXF9V5HfMfS2",
  "key20": "MYBPni9L4f1eVPa2aV6HGTaSpaLH6QiYqNX2XCJkrGCFVUpLSZFvrZm3Y3rRwtD5YpYDgrD9LezCBDvaETLCBwo",
  "key21": "8HpkNMZE4hkumEejpR8cH36P4swNECQfn4fCE3TSYnejgf3VxAdUWFSLj2HyiQVoGDrCU68FbECiBVpHRtmYjCP",
  "key22": "3Szc7LHfXYWxAnHPdBKps92ZGPFYTXA3A8LyDqeEVwT3Dm3wLsBRBqEqhxYo31wzh7oi6vJ98T7SSdCBSbHicJtx",
  "key23": "HCqnywZLWoANH7C9Hei8QWfahxduEQ3k6m3SdESNeZKSvb4YPzrL3Mr7DwU3J7bdwQkGWHvGRdcbgYjdwtcVP4u",
  "key24": "4J38hJnJG2rpgZc24FsiE2xFjU4qtjGux34TXMVSpoDN5mHaMA4DSiLee1ssoN377vmCSq8qDvfoj8HL6NsERuc6",
  "key25": "63sFGdPAaMhTSARn93ky9rBrL53HEVvZnS4RYKzkGUnCMfg6519ZRtwyDEi5ECMzdFxDtv1m1QBtSEtMUVs1qJob",
  "key26": "5Dw4yeXEV599dXPTZvvw6P8kyawJamu2iWFmgekqfrKo3F9VWdWS3ET2upVMHGiTEJDyegTpWRgg4dmCqchoKWas",
  "key27": "3hFGtQDYveeXr7GCYW2V4u3kQpxeyXn3Nhh5kiTpwTYKNA8j5xhXoy35TFXDmkPaKZJ3nb2M5zHkT7pohW9ZtbAy",
  "key28": "4kDAWDLNqMWivLTrDpz94ZyZVd7BaT6uthMteLogvCqKkDKdwSx3RrGE9p4RjrMny4EU2XZeFbYHfnNWymLeNHY9",
  "key29": "4YNKz1ExcEoRx4NCT2E9ESN4aR29ka8EvE7hdN3CTNKQxTfT2BhXy2EEXGbEpjozQk95GimoNRDFXVVqLt2avHE",
  "key30": "2jNUa368YXzs6KruJwWEys9cynFL6r2mYCoKgERfZZz1PLYKYddnP7ecjYP3VEpuJPJWYtiJtmRgzRp1kYbGYbq3",
  "key31": "49Pq66RJTvYfEdGYQMXEdfwVgWdFc5AqwhyF2GZA2xGjcrR1XMSEmowJDA5fsouLv96pYaVqywh8gZyJrL7hX32B",
  "key32": "5NpCT5qaArDP4fWAvc9KS7hNi7cSuuNF7ccdtmRpazCEvfqGB6yP1ew8xBK3rYA6vjdkRNqBrQM8ZJFDyvLgDBdV",
  "key33": "e7DvCGFMs98rEQT8HHZuoiZio6ibaQhNXAnfuFH8wjhBMUyiUgp3vDjCVWVgToQYg9CBK8ZkCrDdCiiT5EwubyR",
  "key34": "4ZBHsSLEkGTw5YtSbQwKSvHmTJiozTTeCx4e8zuUJyj1vdux7yThncFrc4nW4DHZdchR2G2ooyCicLSTJRfzGKwX",
  "key35": "VxDmWhTyavZRFCY7M8TCn7rasnfRn1qwoFSL8KRER2Hm6T7u7q9nkVkCS7DBMwctwysgVfefZQHTnafCkuED58b",
  "key36": "377uDNrP6akbZkEho9YCgAWRtwgons3MimMvnq6vvgoaFYVMgfq28x2ytfAxH9z5mwVQ3xen9zCuDNqUZwHp4EP9",
  "key37": "2UqRCLGBysfvUZxmNRUitsFQFV1fC5KNfZK6VczDRtm4HvZWvWnh7iygzwKgDRa7st2hjPAgC2LJBo1tVhbupz9f",
  "key38": "4wmGxUY4TuHydzvCjNjz6yLydrQrpu8RjR53h37Gia72tWr5VVJCL56Txq61vQxXwymXd7E8zyDdWB2P1NiD5AF8",
  "key39": "27MjRkteZoMmu9hxL81KJsaGFYrC9ovSVG15v76JukMXgazttGn5V2MtK22tvRCmb7rHo2exyPPK1ENT6rkqCFZ1",
  "key40": "3ghD4dFugieC9vnUzpdCwt5HPPqk9kqJC9UhS46G4GNpUf7tAHpSfwBPaB7yAuMehsdFaJ3uuh3dXAoJquuGaTaS",
  "key41": "5wkF96HX7Fub1mTYZM6prFCSjFkPo6R6p7vjifKfgmn9U9Y5dwCGMPwwjwW2p1stymCaukPadta7PZQw312Upcn8",
  "key42": "XP1C1doonPZJeQprDXfbbyiY2ULh7ErBHgQ8BQuMDg3dEVonjntLzfzLZE8wGSjYEfterxoasY8HaYiLymaTgbP",
  "key43": "3fQLftAjzpaodM19Bq1k7QUHfDEZ6QLNrpoTCEXjxEoEByr9aJYGAwxk7abRA1LL6qhbneEaSHvDfFj7VzkTCgGB",
  "key44": "5oy9DuDtSuAJX3EBkCHTVascpvajYrkD9SgSropgrEVLExpre1gPvNTeHrqS4E8DendWd4JLbdQuGF1BPEGorjaP",
  "key45": "62dfa8Fif8GGEaQN83XQm3VCiwq1wivRQGWhzazdHTqj8tgpiqM97xqP8oygseEAaHm1boujesQDh15oFrZosC4S",
  "key46": "4iiiXfHEB3RaNfo9CBe1T8zjob1gdeV8WtcBbNfRyBANPmPH5F7piThn7Nn1ZrEYo1NMzrgmBgfPpHGZ6uJvoGfF",
  "key47": "S38H89ZJPq2kJR4FhBCmfTjJuoswc9dKpuhuRNTMn7shcH4rwsaNk1RV2f4SkZFirHCg4Dx1nJKcwfENL6RsBdi",
  "key48": "5tR9CS12j4rMz1hrAKJxbsUUPUc7RzLPzQFEu53TfGxTTWTeamt4K1RoB8Q3RkWjGFizFotRUsx4TJRKEUmsP7g9",
  "key49": "3Pk2MFvhmXBYgNcyySBEhiqJK6sSpQodtGFHLDpGiF9R6ifpV4f5wgUTXkKZFSdBGpUrr9PHv5CaCTnDHWRtqV3V"
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
