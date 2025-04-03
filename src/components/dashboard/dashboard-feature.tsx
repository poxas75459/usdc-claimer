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
    "2UDRdVyD92ymRnJvsNDfhsTKAmL69wdYA3ALMnru6KtcaUMCPrwXXXDnNAzFLYdAn7d7cmhTBXtZg1HRxgoAo5QF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HAESnaEJzmuuKyCWYXe9R19AGbC9nThcXTS7DMCQM9FGdsRvso5H25jvaMWKyBBnUKqaDyvTgoRTD5FRkLXgQ41",
  "key1": "4dbZM1qh3C8FG6ypi35aqij8txoVyckubYd2gBPKcY2CRi6PMtdhCAaF9dZ56K82btYxP8jrptku7gPKf3fQPckh",
  "key2": "4Dm8rCok8CgrmP7E548cnHVQgMcMXtzzHagNkNiiuQsdnsrNw7WJz7a8TM3hDpnZ8MWTLwupMxqidz9iwtQQeUbE",
  "key3": "A1xQw58rQTV3UB9aCx21qqQM6LMNjDCbWmGaVbbeYDhKj7597ern9hrDKm6PLnyK3H5NeN74npwFX6NZ1w1THQC",
  "key4": "uyzSRVZJvhuZMDaGEydD4xRFb21dthV1bBugwoADuDqJ3bxEzJmN1Jaf92mf2YsXq3QnB1hGqpXK3Pde2VcP951",
  "key5": "4vydScFXkEBEnFbd7knuY6YhHgUniVfoR7W8R2F4N4mTn2gejcpLPsJ7c79FhF3dEoEy8F8f5srP3Ny7tcv1A1ow",
  "key6": "268S7V4iZsPyLNYjUFczutUFz9Xhivq9MW2bFZ8Bscs5HwEA3wMLYkHe2AbmRNpbF16hXsXkqQiu6Ac8uQyPSy5A",
  "key7": "5ReYeeVkwdmuSW3dLgLY7pnisCNN6BtBAc8wFkVPQeejKTz4vCjNufwAVoEbD7Zbgde6WnonsrMbKSHTXqLXaSam",
  "key8": "2vt4sCyDQCy2EtJig4zUfQbqx7CoNM43UpqK5C4AZy69VQQuPso7rda7y4xck86i3Z8418UtQamP2tcF5XJienqh",
  "key9": "7aEVJ8RijveyMJYQEgPe5LDGFztMdaqAXqzCjisgZTG5XmYnWSrVYwWSY7Va5qv5oFhuBffZyXba2n3BNkNCKUF",
  "key10": "4w43tYjMN5uWgY2ygrSTBaRwv6FkhNT8SUxwB1MDaUmLLQ6q6sMrf2e4nzUwLZybRCHUc4X1FQTMXPD9epVaNA2H",
  "key11": "5pQ2jeLQ2iu1r6yBaifj35GTXChAJoSjgGURLzzTqMSJSBrFtD91GMu7Tn5byuxvMmLFoLFFALoixVDSH7jcSB1g",
  "key12": "5mjZbqcQp3m5KMp61jTJdiyft1d9zJaowa6ppd1vryz5ZaVtrrzMU7XA1ca7k9aMD3wbEGDqP5feurLGVEGSDBXi",
  "key13": "4upUjnTNd3uPMQXK4SCQWoDsd4FWz1eHd2ENpEo25MFyTXtTwA9vRP5FapeNsLtDnhB992KspLtQHD2nM7xjMByG",
  "key14": "4MTtzsyRx5azTBdWewameEUF7nfCXRtGJp2awYCnyEEpET6phTnLMpXWxRXkAE7cHjBP5zXJs87UipQS1n1WVcgp",
  "key15": "qWZmBXzzPDi7p1Zm3L58ujy44QC4bX9EjV1KNgiimWzaJdNkFPuBiEVDJsnSZPztcYaxJ3x2JuJ8AP72ngfDpAo",
  "key16": "JoRyp36dRXXGZ3WL8cucP8mAwrFKm8zSD7aNxz7APkzJzeew8DZ9zR19PexxMR55MLCckWFPQCetBxQGkghwEbt",
  "key17": "5pRJE2TD7mVHPhuJnawFiekFo5zgeSBZ8kcf1qZY6jbGA7QqUxwS4xGwyqCoTvSZiZ6WtyTmXSSmqLFJU6AJNL2K",
  "key18": "5M31y6qJgcXCRSfQB2noJu9aDtU1XgY3eAxRukm6gFfzTeBTH3FPnYuJPjsP9b74fJCvGrXmLGvttY195HPRyJgF",
  "key19": "4bkDCtLLFJgzn4j874KzQYiQE9mfRuVC7muLYPD9vELXfCRjjZVa7BY9kK9DLQj6zMavP9cjhUrzX3kSLCQLSzhA",
  "key20": "3J1ZZNHmGDE3NoZtcpxB6veBtXt5uJz22VVNUPBk6mPwDcMarVPKZsTBKRLTR3exGvTS1f1HwVyeSEzbd2j613vS",
  "key21": "5EahfCwvPkDPevhVvHuBbQU3RF462GdjtAVBDiu4LzH8NUAuoKRapvsYxA3ZrxQxZG9ojoGX7As55qqbpttbQsmb",
  "key22": "iMfMNM6TTbEcgUaLdeAGxymqofLfwY3fL8YLDLH1TrNuTrSwWqRrREDUUrZ4BKHpSJg5XuwcShD6YoNpJ7eYG8E",
  "key23": "57iTys8iJVQkBPNFJPdAtn8VioEjWYW9XZhogQ2LdEBbAjWKyYpfSXLXe4YMD4zP1ZiE5A71rZbbaTG5JRtYdXJU",
  "key24": "55HvEqJfMHndCZtyQFuVvJjHWgip9r9JBTUrTCQmG1NHzYgMc1TWn2mzhG7PichK72QtJV97LCLHjz3jTqn8s7iC",
  "key25": "5UnTw7xdr83HgcKwmSjkKKijZuFDMR9Uks4bMAwpjhQv6YktgsrrsRMJjdM6p8pohZecJz856GfVj5mryiXZVfYA",
  "key26": "jZ1z3C1p77CLNPf2DHDaq3WsEu5cF47c2nizX1AUGVn9tgANyfX4bVtt97sVk3vRrKtyB82a3UXFHZS8o6jJ5uy",
  "key27": "3seqvjVaaaMuC7TE1vt3PHe2CqBkckc1EEFDStF568Dc9STmYmGVjf9dE1FiTa32AXVMXup8Bkpy1bzqsfjMN83u",
  "key28": "2U56Y6YpWwBXnzLwcwVGJ2evdXPHBEQEwhGzbdKyHMopJDbsKC97oSfTvyhh495n5NUvAXVBxRd945UMT4KQxwcQ",
  "key29": "2jcYSFNMfyF37Gym2P56ocFo6XWGZc2gHMLnxkJVeZ2juFsUZ6Hmh7H2B7N3dwUKU5MuB6TK4y3fnpYMtNYuk1ds",
  "key30": "7YuqNtVjXrfpj6nxeygQj1NpWpMSU89oMoSAUDLZMuF939r47RXDverg49MDYqmnoz9LpzFtybhnrezLsmy2C6F",
  "key31": "dvSo71PebHFzccsL5YHWpdp1DiyeDTmLJDrFBM3X8ByywBCverT26wH8MCv3RgZz7umuSscmC3U9mx4kftBChgV",
  "key32": "3Fso83wCtWHMWbUq3LhyK46das9JWTNVinLuYtXihAnMe54fodZXDxpV8sfWLMofBggfaefTmKi3uz2EM5LUhaad",
  "key33": "2jkk7qpAepgdjpi4nLWiKq3Mq8CnHp4VPugYbmAFC3u5kyuZm7twpFyz35yogJosSp6kA1MCeMgoDQHCQC6zEsvX"
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
