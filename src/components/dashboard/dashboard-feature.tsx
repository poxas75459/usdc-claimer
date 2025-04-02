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
    "5JTdUpjH7unTUfoLFYcQVpXpVeKwSePCFcotGcqQgcwJN661q9vgarwSQtWWYLq7Stb5Ra2FR2XEQdqogJovuLiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xi1XAyvc2RWuenjBue5h4TNto1AJRrdnWSgoUe7GojWb9rCdRnmVXny7D9wMUmMzNzRAZiXobcvao38DUf6VWrF",
  "key1": "2Q7V998AUVS5phrG6oh2VAA1frCBZJe7eUGJHKuYQ8Qid4YhjZpaJAQCzeVAySGfxEadwbJtZaGbzWtfarQ6TST5",
  "key2": "4N69gPRrc9dxbujmuHXUy4EwevqEKgsA61iMPWt8uQdH6X69Ruux34bSspTke8tTXQWHZXUcGh936Jd3cXiBPCq2",
  "key3": "4GSuZKcJWTFNcgEVGmmFv24wMiqtbXZoFCMrzQBBHYSzRJbGywfbA7UeW4PcoJgqUizZ5WEHWk9Eqt7AdGtTttJq",
  "key4": "4FLwUG6XG9EE5DDQXxdpxTiXa2XnVCUNhV8SQ2XQiCJGZkrzD3XmdPFUyKz6tWTcw1eX6vdwRzxCLaVXxc5gkRBc",
  "key5": "5Nr288yKyWmGfqzobeTC8rYGbB96gG1Vz3LM8FAGX4v8iSEYgjZH1STSEGRotaPg3knd3Mmx9oFJeM1KzcVXc9yJ",
  "key6": "48PdMqPovQZDzAzvaySaKatX6ttPJUZVqRvkmgDUVkdhDEMt6S2ZAJmYcT4U4ZZ853iRPk6FpeCG96MwErBZvn6g",
  "key7": "3EJN1dmoTiPchVi1n4U2oHt3fCSxaMR1cMc3ctpALg1qhQnWQwpHcv2TyNYxNLbR6D2ycdHh3iVb9kN4CZXS8wJk",
  "key8": "4BEGA72rfq5u6hfQRXAyHFoMcZQFHxcZPDWprfdRLbvBrwSVFWFkhgZx6hFHEiF3fcPGvFQA6s9Rbuo3jWAF1uXR",
  "key9": "2b2Cienks9nvRuNZZUxWBha9AvoyK4E9nF4a7BSKU851UbHGQiniiF5gBJ2h1R1NrKgaXTvvCTrJ4enQ3ZUEkcqf",
  "key10": "ogSP7L5LB6oZ5XCbt2fYJaTKSd58MnAnaUsePta7DB3sAzY6mfekzGAgTZZkVpY8MYQE4EEjdQmhHx4xfVx8g7L",
  "key11": "5bKG9odJ3FBzDnuHw7Hw6aC2sCzVzRxKr5XKqyLrKFS3vxX813NM1mXUF8vTi63vRzNHptM9mS3ZgFQPrzzWdM3m",
  "key12": "8oDryg44VFKLuyxDrHK9GrexSghY7kd9GwrZ1YQEUks6a1STZcKorPzcG36NEzBszBeRtBZFsCNWCMgjSxoqUgd",
  "key13": "4yQ98DGkfzMDSiEkhmTkYD8ScVu3H5aQVXuynq1PdunwJUPvDNcCLCYHJjc49QYREKdwUPftW9LV9b4kcCj4VuJ6",
  "key14": "bgnyiM9AuddaVipycmEGmh9U8pNrpGiP7CggTwsucYRsMfKKaWUW9CDsoeKqYPiKGYxSvfLQZWoNx8e8pxnZmJx",
  "key15": "4TV8WcPgZkTrAi1aQ6xUJCvsEJsi3deDQAoi2D6aDGZqgv5VWA54d3B6H26o2ZCUN3UcX1i78bsYyNebBBnNrPfM",
  "key16": "3BiiayTaqvRWzmfSFYQ6cPALiCkASD4kCZ1Tvd53EfSsKTNh9EdPBRHdERMRbEXepDdyTozQNXEC6FaXtbsxBhW4",
  "key17": "Mx3GW7je7pARGFUNgTabVN5KTindUgVkPG9dhus5nfbMvaw6pS4KzcGx5zrTToSKoiF9uMTvNAUQTuPswxSjo3L",
  "key18": "2FwYvw99zV7UYm1QVSVkkbRpaDxDGxqLL3hW9rmhFM7vJmFnspbGurAmSyQooHRhXmG7PzivrGg95WYSg1BETnYS",
  "key19": "QEBSDYM86chBLZ7AbMTfihXAHM3LmQp5PPfnjdT21FKZXPKEayLMhJ5Ju9F7ch1t73oBWG4DdDuGnxmfznHatJv",
  "key20": "5s7J4fpU3TfR1GLcENMJRwcuZgxY2MYLYEGm8c3aX6fpMucjPCvXXX2fZ1bor7Z3yNCjvXYsHCwyCP55AbanVYeR",
  "key21": "45rk1fQQMBAjfSz8TPXmhnZ7TqNqw6cvkqPFP7dpxw9eg8V8Zyx7gVvJTXnvHpLN4kBMqPEsQiKMBZjDfGBRenLN",
  "key22": "3XKkMAN42cfpjEstvoL6FLvgZJRsN9aQ3C373y23QbDAVDyacztraKWp6hC65YnQmRheQu2CFdAnpr5HV1cyXCmv",
  "key23": "yiZFRxgSwXuR8AWZEHE6Sc72iUMtR9yKr84pJJ7mkERT5ogStXU1q327txGjXd19rsk5qUq7FfemgeWhE1bvj2U",
  "key24": "4DFp2KGBzLjrfeEPYCSHnfeUQ5gapYVyAYV1iaJyCBaiku3X6gqejPm6Gw67APF1JaaAijCMD3Z5D2bXq6HzBFZb",
  "key25": "3Q8CY1QNk3scdDX7qBntWcPi2EhnvLS9mzES8nSv48PK2gHwrkCcBSQtJUAciDswNDKYU7x2x25n1uQB7oZNPUPe",
  "key26": "5WhYzbnwyhqwSvCj5Cbvbkv4uLCvAMRCgkihfGtAYeCCu8XmzjwnGezftMLDvrtBQBGbuNqM5eoRRbF8dtJS8zWx",
  "key27": "3BD4FaEwAZ8Mf4YX462nAQDQWdtsAgVVnJgLN5F86csTvBuqswAg9jZFXtjQNaM3XKUQ2FmHvsvzTsyMtpFW5APw",
  "key28": "5jWRMfp4q63PfvQykBuGhNQbqPFCAwSS8M9GR4QjbupxpvZ9zqhQXgMtMSH9YpNkV1zYyT1h4bNnZS6Eptnsehx3",
  "key29": "xfADecFBZYawkEt1VxKUjFfB1BUEseBVo9sjTqnk2hYAeg7W2UTMD6GZF3PVfYBD9pVxSuiVLsLyJeYNjdYcm4N"
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
