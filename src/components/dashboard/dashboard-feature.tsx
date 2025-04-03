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
    "2XEhLktTHJcNPmA6VWkLgrnTHQc1ZB9Tx3hcwVCLJaQ1yRM2jA84tuaLTF67yU7qJVMtiL5ez5QFDX2XNNci2STs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vdixeo7ndwLNX4Ne7YQ6xpYoqHMj1zb3ZFVoqe5AcNf51woksNRcgsZ93WtTssqzxXkG4WL9Fc36Rz2jHWDPKDB",
  "key1": "5NzTWVj9WQcM7jT3sdffH91ZHx8S59jjPWT3sjBBMpywz34GsN7YbA7V6oZLxVCEiTUJqQTqbTyB81oDvfG97mGU",
  "key2": "3mzjHg26JmuDW6gAc8VR2xPg5sUzEhw8mcUwrqdb8k9rv6rnnnpChd4Nfmg84r6dMASYzoFSPjrB5xqCSqEutziX",
  "key3": "5cqUJHPcD4zSGSCqhQjLPwmRcadAh4djpfdpAEuF7FsKZgbyYS3aEzos8mJGmkeJCrCxbTVW9qdFxgbKTtzv1L8u",
  "key4": "21S6rfm66NUUpp1aKe3BM58M6PjJKfx1jEmHtxSJPZEi3X7USjQzisgEEzLRopSwbkn8JfsZ1QaTh3CPdCh99sHW",
  "key5": "329XtA8dFZXg6e1AEAsKCMRLTjbWWGfPSeXZ9crcXAgUWxXfniY3nYDvSMNYAepPkDqAkicJsEHMXbx1mzYkqxBB",
  "key6": "2MMbX9b871iqsjRdDzK6SPiKw8cDJwwWzhP3r15qEf6rhpA4QhRHKcASXSCQSbRvdzvYXccScBRFfYnfZ8vcnDG7",
  "key7": "5We1LYYzBTojpHJ2mJy4haJVECYm9vrAztrZ5xYt3SPrDgagzEszfhf8cjhkoUPgJvyeP85pZfk4Wf14pXWTQnfe",
  "key8": "2Pf2bDCaFRNBfFdTMrZazeoAx7WpQp4VFm63kJ88JP4EBFY6GfazkSfKTcKkxkMfzyf7Z1HwoRLLqQXJv3vUxctb",
  "key9": "2hAURR3Mdbd4wJoZVTnnR5DChJmaRjkKRLdZc6zpb9c7ckYCUtYDjtzPbZ6HcTg3dx8cuWYhjhqm91qvSSzUHpn6",
  "key10": "5B7kvFs9GtSZvbkAKGcRWNqWpbHbwrHJ1fDoykUsBWjLfPR1NbHNU9jscrrhUdbjUw7VEsH2CpSw8DaFSrjgToUn",
  "key11": "3aZcEoUWv4e9NQDypDWD1NxpYtdfYuqRYJcSMmctgHe387SVXthgTtX3UzobxjGuS5TzFN2U5X6LqsAGzWc4KfAi",
  "key12": "4qeNjs2DWjKLPksbv4kUQDiPYcfoLt7wvtbvHuKQAiP7YKQBnXfPxSEM8PLPhHK3EbrD75iGya2cGuJQP4gfCNh",
  "key13": "T9UQ4BeGuPzWkGsRuDEcdaxfPj58Mvnrh443z96BDQfH1oo54tm8qSzYA9NnmpHLkTyCXLNDNuC4DCfTBfS5t4i",
  "key14": "3tcpbzVseLrLLnxKrRpMPGdn1r4esx7uncKoEEeUJStJnPqtGBgwunJwVE5VJ866UoLKjZD4rCJd1qJVqpcCcvNi",
  "key15": "3aZMAoTAhn1EuaAAi6huZXbbwXEbHEAR73rihm3u6hXnYDYHi1YoTuBUuf4brhoRCtXqtTpeDNkVyqjzBogDsPQp",
  "key16": "QdbLH64ucxiAeQKx3arKiV5UMXD6nCtQz5zYAfCvP4Vp3EUzgrEicM2UHQSDz9mhr7YNu9bRpUiN47Mev8xfMzD",
  "key17": "4onLB29RiyTjkEHN4C7HbyvYx8khE7wS5tVEYVem8VH2drXcrSJ5PEAAeR33wriUabdmWYQRTacEN5Em7HyniBad",
  "key18": "27bLNWZNsNJVK5aZ5sfccsUFXDKTUmZz7KnPFqp2CvL6KxRi8hqDcEnE6sTNotJiZinrQhsxX9wHMYjanKDbZF5d",
  "key19": "5CkYjyTi9EFtafGrqSMePxWTczqJyMaxtzCu7bVzJcM6smHtundsndPW9wTvY9vDAboPALcuVPCwR3Nw6Dpv2c4M",
  "key20": "2QyxjhKK1vFzhNnqNwzrnnoP2orQaFCFB4iLQQvMHdHqBDUhdtrhDywmskT3mcHBYgGWhpYP1negtorEAvmcQDRe",
  "key21": "SASdSiPbbq5YqBLBJUHT4fhbqAvivU2hdtSh3VfZ5HvN2o1boxKg8PHSxxBJiJMq2zVnF8rfa5i1yiLu9vB382y",
  "key22": "WzgXb5CKv7s4oC3sLeQRyZNC2MS6e6Qsvp4pstheDL7UtBkizwbzGursp7pA63PvdPEzUxcz4URMnEFWyV6tf21",
  "key23": "4VFBxpAvSbgazdEkt3UZJGZnWhsfEimji1PjawDDgxypW6GGPsS4fBQoBYuVG6W1tsrengyPqyeGC4Mk9heXyvqR",
  "key24": "nntTsDXVQAmGNH3kzgFhFHeUDZQFF3YwvmJkky2Z63ErQnQNscQ9kcPxDaKx3BrtmkLpveyHQYbwKX19995oHnX",
  "key25": "3Zja2rqhmL3ww1SY56ywkK9AQFBSrBHz8FP79wtBdc2D4sTQqj72432ipgYsxGVRyn9TGeo62YfjZfPvdG2ADAJF",
  "key26": "629nQ7EkooHEaUfYufVgf43YfZgp1ygEeUoBc1E7T92nTXXKgusHUWs2Vnpdw94zoPaM2MhJHYou7qHWbecqAJiW",
  "key27": "21KU1aSuqZxe2pgLYEvPfS1rPJm33k7mykX2ie9MaQG8uJjniQjtjHGoKWcy9DSTapzHq8sDRQem3LDs1jJeCwxC",
  "key28": "U6KXjBroXRXhgSkFkqeVAWmcBcxP985gGxRSC3upnpVd8tXYF9idTH7GQLsaQaK3AYXqGgy64m8NWhXjesv9xMz",
  "key29": "2Y1e8AfsCpRKSYVh8tip7N5kVWkFG6qisRvNWPPxGEVpRD2LiN1oC8FXq4pPPT63ifTBJKvzRReGjFiZsEAoPcMS",
  "key30": "5wNqzFvLAho7S4vNcMi3xjHD7eo7qTWJaoXk8xr76eHJbaxTtrDcdjQ2VbN6WszU7Z93C1bnvfgHLHnmP38bhiSf",
  "key31": "2rK7Th7STJ9tw5Uc8LymxhGkNH8Hu8LkqGui99zfR4aVxtRyvaXs7gZ92Qg2YxTmBx5EPTqwGiMe99gNJzsQvsns",
  "key32": "47AqQ8Hhoi8oCx16ZhyPhpSjEHgo6enyzhaZ13gfUhskEKk77faSepRXxnj9NJuohtA7tg2EwX9MYWMyMZadhi9N",
  "key33": "4vn7N7gdMjC6fF66D9BjWPKcS85kLT6ihS5yLBavLTJVpsVr1sP5yfpmg6pg1ojDF4BUdtfVYtfTNPBJAmKmnrkQ",
  "key34": "2HDsBaw1CUvJYdDh7gySMBQUWgg5P82zeszcrb7iwJsRmkUrsdbV4uuqxETwL7GoYf75KErzqkwZwR2HtCY6uyvb",
  "key35": "46XuTrEProKnjyLop5SmyrVwGfk5YRj8zXr2krYb5p7j8Lsp8ihRSUM3BcJpNwxygrdAvSsBJz64Vs6T11NcW5Ju",
  "key36": "4dwufaZmRbJ8hynkaPz39ZJan9G8CRSpAv1qRnsmX8kkZ1wHuHDjkfmQ2Vv5Tnd2Lwmo33WnyUgm2ZZTGbcZqhBM",
  "key37": "3rpXKnASBP61jVBpKBWXJHPyJHJPrntB3MvQ7UW2SZyUkhbAznYwjdQsQcd85cCVNysaMwzRg215QaNPtyEVi2TP",
  "key38": "5PVLEm6G2xAw7nALfwyKECsZvkAxJDdaosAYzHdJGuqMfBmpD9SX43vMndpyFTGhnogyVM7yZL7A2Xb3SagYLPFU",
  "key39": "48K4p2qTa4NVuwrHHDn2rZZZbKRMakyZFF3qCaiMPwMmzpQfttTM44brwVxepg3BUS2kqcWg7Lc1n2zr6utA9Qm1",
  "key40": "yLZTzFNnNA5nKKVHx1jbeTN3cuo37wXmFW6Zga3SmXwkySRCvMtp6BKPiPDNPYbhJ7GXLpTW2WcBMuTKhxXBtig",
  "key41": "62kPzFgs6ij7RJGZcATeJ5MnHetcCmixvryn9a8arRfHcD41tQ7ctmjr43PCnVjaPaqjUqEZFGvCaC8Am8BiqfA"
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
