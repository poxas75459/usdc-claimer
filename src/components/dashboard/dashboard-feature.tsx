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
    "3kZq7BJNqZEHuZqhNhYULa8ggCT2B9EKbr38rhjrY2z6qMr1yAezeu9Qw3shZ8uuruncbAEPeJXtk38vUbSpuHmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apRB6JN4kUbz1Xxd5qGZjdi2HAd2R4p3T5YNeLFBQV9FYRjfRsozswmvAp6r6FufUezNuvpxkw9vdY7jHUhpRPf",
  "key1": "5Zw5Bv2VgJwViSfWnrsvqHMjbi5FpcGDNAYUtRqs6Nozzw5VsTbMwTVjH3GW4Wd4xHMMbJ4cR8GDCE6xbg7G63fZ",
  "key2": "3Y7hjUnJUczfst8acs5ebP4MM53aduVZQjjjkEm5pQpUALsAugMzwxVCgPFSq2HE3RPfDiGhXufN3918TzWtnfVX",
  "key3": "5u1T8rjeG8YfneiGA3ZXeUZzQBqsKJ5MxkG3jMeJ45NfwmF23CrgSqbuUWoEMyYNh3k4AE4Xapapzgi3arCE3vtR",
  "key4": "BHxTS5AW4AJ91UrYZCDH4CGV2FbVEPZ6fDeAjzUvK2bYfyB2rNPkdBhc4B3CPSzn8rPgAhAhM7nzz4dfCYH8MeS",
  "key5": "5RA5JDQHwKwRLca9EvPoJ7zpmL7DAwx4ii4QSBcgfYwkCJv2rHKGsNFKB7zMmrphVZD5WVdZVyAndoxTtfkiSNA",
  "key6": "3GJEEEwNgvKNmssXzpBkQqdJX9u7XKyJamBnoqmMZzjmGi7DcNipkW4F4hirunpxRRy1p3mPp2x7DTu6FA71Bhcz",
  "key7": "4zYoNoS5cneqs3D3gKs8fjnHYMod75Pg62McHFsgg7HRmEQRdFeGd7xZsyQbHUjduFTeb4LkTycUrF9CvNwYuBhn",
  "key8": "4j6BvGdC3hdAkcbedfJHfmikZGkDdWR2Dd3wmYZKRdVmwPj4tHr1xhh9pQgFx69A3ZGdUhQg52JneDc34QivEbCz",
  "key9": "hBJ2W4Hc3mUvrdwy2TmFXFkxmMiXiWazXVmcSkYP6JSBVMAou5afwRheNWiikfKzsmnTa9dVTV6Mv3pUbKeayKn",
  "key10": "3D3BnEbnmRQxodPuA191JWxsF5EAWNvPgkvVgGv7LvDeCJZ8hZvGUBKerXsGPJamZqwcMN23GzTjjAFm2PYgDxQ9",
  "key11": "5yDAvRNpjZZDejCrwKWZobo7PbeuSc6mTyAkaiS91rChastZsvtdrDxQ4CezNTHK1Lae1RipYSPkh7sSexGMEHQq",
  "key12": "5aZVZJYYdXEBzdheWtUekfe5139jX49PPEFmuS4qXjsC7SwTJDCCu95JeR5VAv2cyb1223zUys2f41EZWbSDfLHp",
  "key13": "Fm4ULWbEApEg4vetiiwv7B2uhbGFBjhTPTYs1bCefWQZQzi8pN9zopbKbxS1CYEvUFWLoSSMSdwSeQ9YgTXDa7X",
  "key14": "349ZRLugRCre9Dv7tRacLruwCthNroi7pjspykkMmnfWha5HKFwAew2NWahKHLZB9NKAZ62sEtpo8CPNKLZ6drxE",
  "key15": "5kx1haCNqAkdMrcB2DrGc2gCTULPHQNXEQLVi4JRago4VtJVn6VDggSPnq1iPzDNAA4x44bF5U5ECiv9YJtdqenA",
  "key16": "6QXA5sfXgtoJWLyr1WCikGCDz4edtoJwy2Dmin6q8aSHXT3pGtVBAJVePgQJwZt3QCyBYLHTZ6PMoks4HEiFxBU",
  "key17": "5i8UFcp2U2djTXJCJwEQ5HKrp2WAtw1qcxRhtqwgLofnGZ3xgMeuUBNw8LKqWiiMxN7NUSYrwR3EXUixKmg83DAP",
  "key18": "myTgyR67YyW7jHsGYZpE7UWurR2Bdq5AycAovX7FfC9jejBUG7VSzpiWMzrcAdfYMCdMo8hW9xUTKv8dGRBHfQ3",
  "key19": "2wBaxVQrrdL4Mj1HapAn2tmDGU9C1wXvM4EQU4RiANP7yZovGXgzHdvF4jJsYgFmq3MrWGfWzh7K9aYi9W4dXwT5",
  "key20": "Q4gm48GxDdX8c542BAw1F8NHWsqYqEV8LgRDGH7UfW2WAN39ERUSa4kuPgxzzJnSDYP4UW8CcFN6X2YvpBRwQZL",
  "key21": "38QcFagKyeX88WqK1ZruXgTjbyMjoCk2d7WANVw1vie11oQ8pCvc6dMLQr8njMhy62y25pm3SWnkj7EWDRfCJxE9",
  "key22": "4QhkHKhkFWP77Gg224JfAitvP2yyqQcLTcSHk5k2xLfY7p2vdbnybcysKqRaKP8yYryBaD48vyyjH1bpVkJtHCR3",
  "key23": "4nTYTJnqWt8ySACBWBkK2BEYf2vTfjpEDeYAJX6yMXFMzjAJdYyonThnJBrbfzxUn4fk2B5wDPrw3y3mXqN3PH56",
  "key24": "44qBn2puuSQhhKm77kGa9bqwsdsx5bhTvNutLXAMgFFyxphudr9eeLFhBtDg58qFwnHYyEgoZuUzffMomq1jbSaf",
  "key25": "2Hmd2Jc7CGycNWKGjsvLqMV6zVCq9563kGiWS6f2Fnd5hrbpofMd8hCUSdp7nVpBk7AbLG5CRja4RveKUyF4cFqm",
  "key26": "2KP9Bnvy4QYpDg1GpPeiQV6fztbFxKedApy4PrXcChS4GSKxw7SZF8FvWEJTjMr4d68Srt8dD6T1StUigsew8mrz",
  "key27": "KvJUF41wKk4FtsVih3sgGFSCCWBG6jTvbhBK7kHbunNyGpy9asCMp5E3e7djGibYaa5E7eizAoZ5Mo5CdU23zQB",
  "key28": "5tyrbptRFD3tbjQYeeqWnig56NAyHZzKQ6gswwGDGFr5DRcWpjj3Sx1hu5oUKPVVq3mfGSJofjyRUHd8CCbq5x5r",
  "key29": "4gnTmuv7DQPV2cPpMxWp11uAr1aj41xFQNxHKwetqu8NXK9D7TCgMqqtGrAR6awLy1sgsQ1fe57TcBnMYiTffC4y",
  "key30": "3Li6YB8H4RiaUPZRgJsPh1HfuHepc7dPRbJjcBaCfwQLvs3mtJY7Xh34eweSKcCciFTnk2S8gBn9JYUh55yBvjJ6",
  "key31": "61kzXyKGJWarHDJrfvmUGE6moSiiMKCTECd11apvDRDutvbjivG46qSb6gS8qxUv3bF82tyjDWFPNGvcKurYmuLB",
  "key32": "3r8iJncoGVUaoH9VKHb9aVzaTZFEVFrfNquUqYdDwyqykAH1Ttj59bSEhM5yAXe9133QFoqXC1LSYVZD1EXdceyP",
  "key33": "jcVP4zk6y6hp5T4FjTYgwCozHvz37m8qJjRdtapoxtHKmvjN1qhJxVoqwaawoMCo9B41Mqe2Q14gwCWoSvBZS7f",
  "key34": "56H2R8tkBMoZKQRAHeRchg3A54DL1bnUngPA3mTa9qoqZ2Ybt3DJg9zbVNSaEU2q5GNS4PNtJditHoVvEJHtgdaj"
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
