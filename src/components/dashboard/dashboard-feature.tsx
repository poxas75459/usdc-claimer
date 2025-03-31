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
    "47v5bX977YY7rQFpLi2V4hqNNS1tJK1BJn6eKaWHF1teMhPn6LVELuYQQ612yosd4WqTjjsxinKSQQAh483Gshf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHAtpDdprhCyfiAWHikjSVhWDkPYwJvtQvW1K8CPzf7DM1JvwoBpGqg6ecKpuSVztEZc4PJU9N9bfho2BsotFGV",
  "key1": "5RgyaYttN2Qw992YxinbL4RKrs3LqHA9wxVtGrTmRJXdghyDFPYXWhyE4uQLQ5ThVzGkV4CF91YXELYi6XXiYSLo",
  "key2": "4dYePUUJSMMAoFKwfRRqhuAmF4Q6gP5ZdgL6L4kWLGRKFStHyHmAN9hHVaHKcVhtnMGj39b5YRNeSw1YYpwCeL7x",
  "key3": "CTeLB98Qmkb2NXJswRT6nWkjzFCQpzk3jxUEDeGxJZHVX2mvXsZjuF9StL9GkRawyEFzmRsejds7c7M3CpZbpyd",
  "key4": "36kwmDb24tbdSbmqtnA8m1gC7qreHUaoQEendC5UzNFfqG16ici9oFxgZDe4T7U7oVzHRY1nJC5azg46RaypqjRh",
  "key5": "8M15g1UsbN5y1VCETWfFtXcrHRJV6Wq5ADdfq2o3SuGtfSk97uJoXob58gBPXmzCrv4e9dWkjo7jeZfj44Vu2Ep",
  "key6": "eAZaS5SdpyeWuR5waen485K4x6wB36eVhATqSkzWxji9GL8VovsoWcNjqkvDiexm4hofdXCo1TmvigJcvbdCNMy",
  "key7": "6CuBqjtsjzHTJa8Bmmaf8GxdJjuDkCkuXM2ckofm2QaM1a3QdACK9sVGepL2TzyQCZumV6bKn2kbYfuuDMdLeZo",
  "key8": "2hfW3f9UZ29Z9rZ9au55U3YkiS9SoCbuqptBXq2Gd6Dy7EzjHkLY9qp8s4mFPhQCGueXoTmQUn6pEq48ed3MG8tV",
  "key9": "2HM4i6wAXEbTYxBe2m5J2za2mfXF5Df8BwR7e6LKcFegd9VT2ZcQipLF7vrqrmKJ5RrXsc53tZjPexb1pbu9keti",
  "key10": "48XNXjDn4SJ8fKWGn1Az9d7pkBAeDwT2GyeU5m5qw28QTDeqNmjJ38WFcPUTWmWBQ4JCm1ejcWsQ3Xye7GGHgcdS",
  "key11": "628rwMVD1Sn2nNU46BYXNUwii4LZRcn5Ect2XWW2WjNTs3GVz9CRuSLhda21Da1EnyaHgq9y3yZ2VsJ3VR1FYnLc",
  "key12": "4Db6uQkZZg7BF2qALVB5y5VQC36R8YLyZZPC3NVDGFey44FTZUadPeQ5KvFFKFKD2h5AJACQgegcPRYLZasCXJ82",
  "key13": "5w3zvaad8u7NoFK9a1pBLY14uAAT1TLZYWNc6R2qDH2fCFE68qyLEEaZwPfVjYkDaEAkAN3dut4waHroyzGycoWs",
  "key14": "3LRBS5ZHGXz5ReANcTHPLutstmEwZr9PJrLDnnPVozRFgjGWezhAacBB9xHH8SJWL9KE3vEsdTyfUdmStHkbtvN8",
  "key15": "2Xwp7eqzUwiP2HPyyMNEYQwzMhcBpHnZRN26KGWFr6sHNByZQ5wQAUf3P1pLmR6KR3U8ScbYcDNDKuX7Bh6iARwo",
  "key16": "45tkBNJiySL4NE5aDrSbq3sWi28UebrVMkueQLCJJReLKAE613oGebT6ZSNo2Ex1eLFrf2vYjpxN2gGDsnZCZhvt",
  "key17": "4rWFqamLTFjP5mxGuX3EKqxjRkZAzcHBnZWDfkSvmNt3E1AZd5Sj8SVLDn1tqTR6oojLDrDV83zNVwageXmxrhkH",
  "key18": "2uzJdM3adAeUuZk4fjE3Fg778fKXJ5D125UeboWteZ84fHp3BJpRSn3eZNDdjJB7QdnDaGNt28Sqf24GxgA6gEmh",
  "key19": "5TVbcJeV638rSAfWP6vuNyN7X8nH9rAQ2KFUcwSspB278MSEGVfyeAVeHFLmY9Ax6Pvnc3KY3tNwds9KdEM4Z71L",
  "key20": "ftowmk87z9EKLEzwFEZhbzyqey4e9TWQunwoMzMxAvqheU1eCNZ3uTW8KCh9mps7Qf7SW6X3gXqPCKXzSyGyy6d",
  "key21": "64PXox3wGdSsLBx3bdySYYbN3LMYsa2xkee7TsJjz7dZr7bDwZegReL5BQ7oosbCYuNpq8fzMWL3YwxCug9L23WE",
  "key22": "26SgpVmVocMh4Ze5J8aCPFLRMNCzww7NtsrttsrSGsFP9tgF8hDdnTj3AKpQtMPTg5Zceewtr9TJzrqYjumwdtRd",
  "key23": "3oiH9acRQwustjRapbARzuZviRP4WqtQAmYUQy2vRLb6Xcy6VHAUDseBHE5xgGBWfSbxNTg9J7bwVFb5SQ4tuzy9",
  "key24": "4QfVYBUxS9y4k3gtQf4D1TPZSGDnvqaqqNZGrnRkiHetUa79w3UixoiRwm1BDP2UUMaRCcDxp9VFR1UFenJACoNm",
  "key25": "WYb9i8Dc3gLAPeU7GgDZEgLGfXCLeXkoaTR9AD6pLahramQGA2vu4KT5yroRh6hjURRSyE1tAHq1zj9iJsothmy",
  "key26": "3noRnXMm88p6D4YJ5z4SpiwEWnmbSGbhzeH1UMichxpPDw41qNtXK2WXEs25bFMLtBjaV9Qc363r6jaQVTNonny3",
  "key27": "nsmdvED2eJDYfmeRDFZZ3hFRnNxHjKmenhigYx1YQ3YXbkyi16xrrYmruup6TwAL7kPptgkAoJ8RmDJMwa7BbnL",
  "key28": "oZbAkoramd11J3xMCSeSXDAW9TfYSRJ4kgrU96ShcSa67WQBn3rufBsuEttmf2Viiez25y6tY8YAQzdDaxaQ6Zy",
  "key29": "F5NsXrTZ97soMLnDxoXw1tG7QzjbgrEwFKhoaEDYiYTG1ZA9KsUDJ65Xox7rzzh9kA4qyzbFHCZM95nLn9L1h96",
  "key30": "4Jq8G1sfqbfsyJSeF3n6oPG1CL9Kzarw25fxi9EAGBJQee4AWnZaos6cTGXdHrddWobKfsDoabBTKESkq7fcvjaD",
  "key31": "5SQre1k2HBd5fropVj7jN1zqjzeBjCv1X7Jvgy15TqhHcYR1tUQNg5TdHDU4UtUfy2wh6fCEjzmhBjMv6QYiqLT",
  "key32": "53rQLq7arPPmvn1cE8YaaR62KpmqvWnmPg6XPkqWV2XCkAtsHw2Z7fqG52rTgEyk76aHwp3ShvgEsfkvkQosDwL3",
  "key33": "sUcjeG3Lz8pne8dezyvoEUyaYbqQPs2tKFQANjqKC8y7cza9WSUfo3YYSnBb2wCKVYSw6oY2xjFgziRLDkN3Zm1",
  "key34": "3mbPC4dV2ekHmVFgasvtvfgZKfzeikMrmJcMKLatjPx3zBWZi1uivpqtDtUWmmXAj8JoLV3xG1rRYNRKRszg4uTM",
  "key35": "2vYmTfRr9U6eKrNgM7vJsdn5VErNf2cJGqtJJG1DT45d1GWiE1swReuidKEkS96RW7TU5MQj64GvVUGMdz4GRuNv"
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
