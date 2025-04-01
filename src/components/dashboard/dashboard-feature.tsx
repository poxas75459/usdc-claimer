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
    "5pfAGKLhCooRonRmB5B5umopNuBnjyiobTvMe61Uo5w7oDGJD1atqX1FuMZZcCeJqoRSaSRcNuSVieeTP3Fzea9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJgme4RWagjqRahPpUUH5sGCK2Ld6RtrZUqNUDYYHjGDCdVXT3bo2XRW2KidF5HmSNULNmLRsDRSjiSJPc87Bpo",
  "key1": "4AbS2hb3zmC2f85YfVZuBM3CbTqFLqmHMiHzgXXMZvTCxKU1VQv45Syb3M3rh8HRK1P7uaRjFFLRQqJRjppURbaD",
  "key2": "425UxVXETmKx7cfU1oafpfcQCigincQRfR15UZaKWkfmr6Wpo6zYqqs7nPqh5tXL7jr9jx6bq2QCdKbTRE6D5QVU",
  "key3": "CaJxD4FD2R14F2Ds8UbJ7uhBRtczepQk7Qmiyt2gRqiaAtfgmEbnFvdvmsZn7CCnh33dccZa7ru1brfYH8KFsQ8",
  "key4": "5BCRikmaugcCipRtBF5iojSXw1N2mikAbYbigKaeiccb56oG3KewrvM3Xc7pUo1LnExr473DFmPZMfrYEdBUjHsh",
  "key5": "5ZbNiJxWBc7jnn84Edgxiof2ZdWDEso1JLkwJ5uNWgTvA4ZEpnUs1FN1qrgMjq1enjJSvhW9pidVENs94hFmoz6C",
  "key6": "4XqwyGCtw5vTpRCFnf23y3uhVyMcte3pMBq4QGMrp9EUxgmRFhRWHcaRgTbzj2kQsmuAoQSHjhVjyjUd3oStKZrP",
  "key7": "3EUUfYKp8KWecbnVSWaB1MYcTCEQXLtjxwVebcQK47VP8myCvP1DHuZF3Q3CH7UVBf97suZcro5rrP4KeWTuuv7T",
  "key8": "jUWgWH1LC5TDgDbwkKMLaHnK4LrD8R1MVWKEwvAFfEwmzJ3y7hcszuCVUNrY3jNWUpqU8MCt4xt7Ecuedpb1zNX",
  "key9": "5dsskNAuqH8HeA4Fk16fsDNqX1idvutqEXKSxpifmLznp5YN72TgaSHxzYRHZHhCLV4yisfG1kwaKnqmZ87oFTM6",
  "key10": "3efs87BAVZW6nyUmcsAHb3rFkd4kvH9pqyipo5MyfXq8r3wA9prDV5aym3GvLWUVnDFYx4odq3UjuJqXqocjJD76",
  "key11": "3FQzMBWE68SAu2TdPaxqf8dfVJv9GqAUa8NErwpPi8KdzJYN6gqjzSgCS2eraJMp9BgPwnUoCNwRGEESGhA7M3c2",
  "key12": "4wx2pwVVBRfvyNnZbszB756KUMFJWS63z287BffkiU4pGmwdQZcUzYAaSXjY1hf1goAqVjEX89WFivbc2DLHnoid",
  "key13": "4EyRTz2Rbm3Awmmgn9Yvv4RMFgAmW81KLiL2MKryPu5EqMFid2aJyZoMRHHX1sz45Fq1dXnQKX3Sd7zb468Q2mn2",
  "key14": "52z7K6nJNPTPQU9Cg8Eu3CwBBPXzwkp3Gug7UL5SawUHDvN5KqNvDNHZs1dK4UMJYmDCwiekufuqw4hf8y4KJrsH",
  "key15": "2oucRsrqXBmG4eEK8esKnHocxfNQKscoRTsXaWmRGRKL7kNGbSswAJHZvJiG1WjgocVDnJYH7mfYA9Nx5jJm6iCN",
  "key16": "5QdiUZwXWyypBCNBhuJ9Kc6CLUaCf3gNzffejFEnCDcZYJdvupUAssPwzP9nd71uSEJe4UMarFMNaFFPvV2Gw7tn",
  "key17": "43byoqg7noPJVhZ6FSiNFZgmhDLSLZEyC6JcCttyu4AAKB4VhusoyYTtThFg1CmNzGGMosRQKA4DVQpzXSii1gwy",
  "key18": "4SwJ9WqP1AhRhyTAYD41iEPNipc2QN2Pgt6HEEYbJMj985q3y4vRaRuF9pGVCefCHqgzBzoqtUE2MBtsqexY2ECw",
  "key19": "2YTLBtxPtXJtcSLLjcoqcMEQt8c8mgSv4PZVFUMP2n9zza3fWFaaFVaAVXs8zzqdGTuMw81njD6tr3ZHmGcfWvtY",
  "key20": "4xGPXmFXRDKaU7rhLXZ49gdmnYY2nZtaxwi7M2H9P4rHKZ3bVdg3sQnX9ctVSGBEYpJrhvctQoGmuCAtUEEjDEDj",
  "key21": "3zVHPt9zxiHEvMU8ScC5Y31ZjHbVXSxUPm4NbMZfPYE7249ChTKwCpXLDnEHjcyPxM4zUdQJo6ptivwjFEPZzVmW",
  "key22": "3cvSToYSBmPQjKvXmgPZBDNXBSuiCmwvwgMkfXTjnbgPTtWcqXT6MVrSs65xXQoQLBCdGVeyH6iNaeUZQNcpMwt2",
  "key23": "4ekQbxpfDvwQffjHzvNRKKmvZQuC1FV7rYJHJdbVXpPMJwxFmrrueMToyCq7VMQFVMmAZrxpcX6c5adfUacqTVoK",
  "key24": "yWdCjg4muwXdsLLAgkmTJMkPj2e8umMPicEfXvk46XM1Hf83WxBrvUVbsZp4qjFZAsuKtQdYdfgWkCAFCuKucQy",
  "key25": "63wq4m1fJFwaWM4S6xGsbiCNzzY6igSg54bPYzevzUYzrUj4yEDjCnDRbDEWS6HWbPcHroeeuTvqUV9WMvWYsWWk",
  "key26": "4FqaFF5GXMeBaYgCJNDV5A93CDtB8X8RxR1qu3gY4RJodijMtr7Rqua24ATPhS5z7aqndibKQXxQH8fn6wPyWUXw",
  "key27": "5RdFWJZQJupQdS84mrsCirExJwNupJEJBAZVTHHGeYoxo2rk6JZoFmvTHHSUNUgLhqGqFjRWz8HAtSoCVR3ajEf9",
  "key28": "4TuENSBoAykHRvZKaE3VRdVxGXjX34BBDJvANqsNueFXDJbkaBA8EnPmwsr6cWmcc41JbihEHP2yC4Qandi1cChk",
  "key29": "3PF4A3TYY1TanQtg5L7nU7HhC4WEWb6cVrrVNS5guTSrJZbdqMSgrnjbEsnUgq7gwNBjw1AD8qEuK1MBZxHiHW95",
  "key30": "2gckX9J5JEUgyfzYCfHFt5icspRb9tCUyANjV4kPreXsa8GiZsfXKHAnc8taTwWsZyH3yxUL1WQshRv6EgKfJZpJ",
  "key31": "2cVZ86c9C2Fs8bD7c64TttDxKiTCpT4KFhdkhHe67SNBGxaepSrM9ReVGraS36SJM4YJssFCZ9yTfF6xw6Ufe3Jw",
  "key32": "5T1G4xi6Wm347YJKTqsLjaF73CdT41r7gMqHTErzRuUdAadg7H51MW7DQvWhXqUVWTWJEuVQsfMiHCJW8bTnSq3b"
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
