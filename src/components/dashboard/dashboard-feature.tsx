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
    "2Cmbprs5nqRi2YNAZsBKjKBaUFcTt5mZqYyQXryVmSvermcVcHwzDCG5dnpqQePqUhxxNU93u1gHiV1zRh9CYSks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFyryDp9kQ1ZEixyW7g8E7VwFw3GPtV9e4KbS5Jso7b5ZaFxw9NGYLaq32ceh8Ddt7F1WjELHNwANRE5oDCMURK",
  "key1": "AWyrzaZcTaaL1nWjv6g4PViKvho3zpCymgLmuT5fRBymK9r6he2MNo6j5Gtwe1QC5Lovd3C9qbaTMAQAuxMte6D",
  "key2": "2GUKnXKsiMC4ZxSbxHfRmsPHRQHkj32ZFzQziAxAE711cGBtFqX28izQKWp8ahZKyv3Q1McfXXEhJ8mj8E3TjC7W",
  "key3": "4SidHhFizrCfYq41kn69iwgckjVY4BU7M1z5YxaTBTXaDrf9xrorLPGLQA4tpi4gpNhVYU6kK85HFfCc7xZXZmud",
  "key4": "TVRmGjx5MFzkotmSqykhVfqH27yDTPCmePjkRXxHAQSWMwKf72XBzXfgFFBKrAGLhmiHGPy9njncapdoS8Pstmz",
  "key5": "2aiEvz47EtsnmAapRiRXqyN6zerGXKgmPFnFXwtG3KotV4uv149o5QZwtDWrpDBVfYZDqCUqBnsBdV7jBFzqxRGg",
  "key6": "5nTTDFuSuF7xE1d8LqSc28G7DGmFjS3xxqFNFBMCyD7ogQwLCVRWqtyd6YPw5BYFTuspWjxnqjaPjMpsbtJfKJJT",
  "key7": "2xY3W78utXBFLedLWyVCnVB5KSNjrH74SRfEZ74oNR3GwDLUf8gvFEcMJo9Je6EAx9q4z1kqLL4o65Eh9wF4kxZw",
  "key8": "4kmayYw2Lh6oGyigkFS8RunfUszj9LvWxFzoVN2AfQCrHEMPQXGDbNBFpfXHkhtraPMZLH9wVMATo6aRinrty7Ue",
  "key9": "4i7VzmALy98QfP4HyVZqjaSxkMpwLbZD2oNbyrGSvNzmoocYugo8V3wKWfwCDzrX2zriBzjdgqAUQpDY2faxR8U6",
  "key10": "25JhDE8DbbhkvfEPxEYRCwwQtFcjo2NXA9qcCQbH4e64rKpLAtv1hWUUEE5BAg79zzm8AuoGvzD6hrEvWV7fPAhJ",
  "key11": "4qDvPKQsPYL7v5Pyv4FE9qLxbdSdTEsjYsUC7JSDWJpbPgzJhvvNx9ViEY1c7nNSeRzjmGnxqkZohVDRKitRruqD",
  "key12": "2jGUMKT8XY2QVCDkNwdgHMvFsAyJbqTjviXJEKZ4fnfTuLNxoy2Q8diTt5icf8xQhLteMgeMwxUXZyjtzrxzATGJ",
  "key13": "3aCG5Q1zmkKDVG54KHfZEg7yALfXUe1ZjzSZQn9qBvbQ6hBewmHJhuZeFZn8wzWtj2uEd4HTiT4Ca51esTy5oeja",
  "key14": "4UHJ6yKsitJ61yQY4XLX5AHiynpAH4PhupBTFtuLKzfeQr5sNgDgvfbx5aXHmfwx3bohntsiGHXcE4vWzuWYicFj",
  "key15": "7p6r5WTCy9UwbSCPZmvmyTLGEpcaFaj843UqdMfeCEA29UT5dbD5f8VA7PhczDnpW6x1i5K6RJ5m3wXK2nazS9J",
  "key16": "4XaMggmyPZpnmk9crRKJqa6yU8PyKbMs3Rje8rMjMxsyV7jTHNZzG8vuSqr1GpbetZLTs3yWN2cE7E11wBXuud9X",
  "key17": "2eTLSMaFdVERAZTAh7PzzHNNsphdYcAhyqzVFv4y53FDtPX2KUafPXmDyrDymNJN7wKTVG6BZNdpuNHxkpvVJhyS",
  "key18": "4LntMVXR9hvknN8FVwE2CLTrcZFqqqqsvYaH7APAhsjxCbR2kJCatRjsiLXWnHJ6cxSzu2ya2iTCkm18LWwoeYYt",
  "key19": "2TRR4VHmY6zK4eZtVkYeR1V22h57YdpdEHWEDPtqoqyHWgDaKBdiroLGYTyR8cWKkeZdnLh5q48Qy9EvJ86GSdcr",
  "key20": "5Srd2vfhceeAr5QNbbUgaW3WeqPhq9uzj2GncoQrWUEG1SbjKmdiuATVp5EDpjKXfDpmysHq6wdpzKf1onh4CpDe",
  "key21": "29QL3t2osddcYpLXfXybVjzasG3TpdjozWCKtzva44LaP4MBLmTtsdgVMTesAuhHPweaav5eoZPwxasKgAaTLn8A",
  "key22": "5ZN8NE2F4c3GusiiAim1Us1xmCXjMGUWeU4Gc6RwBASvvfPA9VK8x6bq7PcqmmgSMMkphGGP3DQiNQktE4Reo5ic",
  "key23": "5wqG8TXny9EmXKtGob6xzkZPjB3fDDJ4ejMG9gniEXsLDnL3CvkAaVEANSf44YCPNAE8tLUyhFVrY9c7Hc3yD2tn",
  "key24": "QuTfSmNoecrua4q26cvHvJJqRcramQ77vrVdRdEksrabLtGQ6VkqW8UuuARmTSQN3dUsmSVVcVoFUMz9UG59PA3",
  "key25": "54kF2iSdvEHr4bd2F4gfcM3KC4PbeHd7EJe2TmnHkCMQcFpERBzcvqnqzBR9jiKEBCvz6fcexbuPngcaLAaT1fz5",
  "key26": "3gaW2wiUbuqoR8rb5Hb68r8gsM4iWh2K6NG8xop38epZkuM5MKuDh37psr97CkAHzuzzNZKnBkZnnKiYgcsThDbE",
  "key27": "3QkBCJVgvmgxxaWb5Nqat9BBahds6Qyt8aU1tryQqVDqbngC2UgqQpqCtcpLfEUGJ5MERYULuXxxo9xmXcDFnu6c",
  "key28": "5yu1S48occsSwxJ7JHAVK1kgGohRUsZr66HG5su2EbVfgsU8DYtgeNVMagMeMJvFsdiiJUnFotiH2ykABqEjpvTG",
  "key29": "2QgCkABY8FKoKLY6nCyUcCKPMnGQ8Tr9LHUHgSbRxLtFzLX6SdKkfiFdfVVt6F1gkCWEgg5GeoGYXznCnfHDsrYe",
  "key30": "2szf7ijqB3aFFEtNjmgKEDkVMHdheWuiNk7puG78faBnujJXmXf98fJWz1TmTcWoHDK91owHVUcQk4nFiKZ1PJfr",
  "key31": "KXm9VXrMbEMbzKQ59nABaMMVtShBG6K6JAg5fKqmNVY8ZGQJ3U6iGoJqZQPFZeGLKR1QrDLnG5S93TqdGjitmC5",
  "key32": "4TmVEHHa4PPSSt6G14kEE9L2TLQ7YeL1hTnBM1RbEhCNLj6MzDRFjtKzFezWgDxizZ564aZyMoSQ9k3V6W9G5oef",
  "key33": "2amo1ECRvmhza3CNBS9UcvjcMKUC3muvncvr2ZGwn8bzKpvSQmjawGqd5GZ7dm5FqBFqrL2iJYxR8cYTg6A9F2jR",
  "key34": "4fEUFP8PVThbqjVTTqz7yyEiZ5jC8KpQjNUK9KmkhCCNLhueUv9wozdWUMDRZ2bYQR8gwQ8dLCioqjy1upeEyaPF",
  "key35": "2xwZEVCn6ZJnaGaDBJmu79ZK3zChYabc3z8yRMWTH7zusgtwe6LDVDr6Gvn3qH72cRJm5WxAGYCE7wcf8WqzPTLj",
  "key36": "51sa7wP6jNckmMa4oPjHmu31h3Yd2VYwCBnyyfw5yU6s1fkkoVNeYNzAnycoqZscHQBcqEyic1bfrKiKfA1uuFLf",
  "key37": "3CfnQUNmf2t5ULUiiZekxHaMnuFQDR1GiBHTnWQkJw1DzfG2hizsRUvEmVjAL4AE23SVx4HSdeozSz1eznv1ksj8",
  "key38": "2qNCC5L8K76jsNrsn73gCuxY8axkE52GB7Y7Q12tJZmr9hdomNLCc72Ho1o4vfeck6MJvE3jkRKHuo36s2L7AT35",
  "key39": "4UmPqfvUs7EuUArEXtxPNpfQLyBUGyTkKji9xsa7cAkELMCQ4tTohq1MwvJyzipanWMVAiVAnxVcKzPd9TB6g2B6",
  "key40": "2J1eHtDvrku3keFewrhTtgpjbeFHBSy1dHUTWcCRWiRbikSfKAX2KqQPHjjUz2yUUTyjs1oVPBks5fwgg7uAKDBY",
  "key41": "4T3uzwHv7JfaA3wA3ra3KSKuK2pEGJCRfeSR5xcRDfFkAPQ6AoZCqDuvYT5NaToz7iXkRqRce4VDCPGkZ8w3As8b",
  "key42": "2q6AoEBLoFsRxDpoNwmeSNkhpFUyBHriHLAo7hbCfEPz5T8UWV7AV7vGgbg3HZRzUZS89STDs98K9ZZJn4UN2eR1"
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
