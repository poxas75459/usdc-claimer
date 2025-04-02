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
    "2RW8YnTkyr2FfX7u35yz91KdQm3kMgSrLqXMqMTVUfFucQXivP6R7hmKqMiCFta8bs53e1yG9XmAzfYrBmfej3Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xf8vwU8hV8GHsg8Z6chQbmdC9fUjkoGrcsP5q6ahGpBgyVenzwJACmzaSq3x6vakXrwGEqWx7Jp8yHbLpV5Vcho",
  "key1": "5ZvvtLUFRtvCXUv8KDL1i4QyVXs6r9UUeLzxcP6w3NUxRnE2yYDTWxFMKSDN2m1zqggdBD7sXg8tfQWCcoW6VohQ",
  "key2": "uA4cR7yZiic4rgDUcxdYkd2D4fxeqwoHtJxjtCDShzp82ZGwnThXN2vdvGZ3AhSQ9jos1eLrDdbpZHCH4Ay5jcQ",
  "key3": "2sQVE4gR18wFuhPG4nKv473b8hZKZCJbNERg2bQjpXMYsPFG5fqjzSC3Ei1SqvqBNh5ZrMkUW5twbXJoMfuLr4Ti",
  "key4": "3qjmjP9PiDtq3ArKKPZJeNSaS9rLoBmbHLvFbfM6MAmRrrZfcp22vc4rUYmuzjNgT1bahayh6cVQg5JE8SgpCw2R",
  "key5": "4eRfny69438tSUw4kvTVJfrdTDBJaP8JwqurFzNy2CDQDJeitndoZojQFxW7KC2EYC98BT8JozqKN28FUAaXhnJj",
  "key6": "ggDSnn4gdtUupcgRYaQPiyenhzkP2BNPRvFnnv1FD6G548K2mA7Lhv5DsU48os9HJa2E8ELnr426ofxpwFABgrP",
  "key7": "qSNH82EMXJ8rCWKXDHL8aMRNwyh1v2Nx6jC3CQbPENoc3o1ffBGfEQv43pR6wxJbbD45HbKCSxAFURqBEuCYKcK",
  "key8": "DvL9K6vJfaxAcCE1LMVi1CHSzvsaoWt8sYMNx78Dd57RPg16R9QZV4WCnRZqqXcdXsoBiF5WF6Q8kgEf3LxBEPb",
  "key9": "2X2C86GS9jyNJbkQvqF1Xk9zMEeNLMbxjFTPemD32UhiuhERn8hkxMgKbMiWhjBP2X2GfPCQSw5Tv8deptm8PjBj",
  "key10": "2qQwkk8vaYw6DUT6FYcGMHUHQv5G6w7NpmjUtXAqai2pVbPVS1vXDARgSQcsCUujAcpX4BVnzVsFG9yxvJWEBKoX",
  "key11": "5BJUgxdmPhzepY4RFxKGC8TdLEJjkoUKH5cSvsmpXKUiVs3TT2Ew76o3DBERxgE1G1KWnVBxfzW5oR2ijATMYwRo",
  "key12": "2GezbRNzUPvUKK55PfUdZfCVDpvrSCm81WRaV8E1WtvHj5ouw7jm38Yg8iHZBrRexRH6jZ4wzBqVWaCa2RGmJ9Sj",
  "key13": "5Bi62CDZGrbDZhP4k1p8VEhzF7cecSTKkCEdAffia7w9ueZbcdc35uWYBJLd7oe2HzmXo4B394jaPS8n5PDM4gkz",
  "key14": "xBTvYBNjzkgcqvc4aoiueZcKSc2ixKyGcgeMkNypykHPKTmUbWPDnFYv9hsbLSjCaWojjowb21ggF3DHu99zeDJ",
  "key15": "4azm9WdWzV93RDJwMbhdhoqKQuPZJ2ioH99BVnpnQZ1Nmfsp4mBXoJZvzLVx3pGhqQC6khaf4ZGPX32WnUtfqX5j",
  "key16": "2XkMiGJJV8oVtv4LEv4TSdxEVvqDuUziPo6v9b9PAY5KMKBLiUnXtLGmbEGzERGafyia3MnACaNtifENgjnJRoTr",
  "key17": "5piSrucV6jD9RA5WdQD8suFWoVtgqwLrj1hCNxmgqr3KPyjsPR3KvZ8k7BpW5UPELJ3YFLA3zTdm7iTqCCiqhkdf",
  "key18": "2coi1Z8Cq78pjxpN88FrHL2vtAjWR9wcrNeC1whHQ4MoVsF1LduPeBQm4yQMJQWZF5GtNpviHapt8PHQbSEZTo9s",
  "key19": "3xHBAFw5KcQyhT5K6ZJ24VwiuNgLcANpYtuMQtCXMofbUStksWfzqaYzDSjb5hfz1nfg24ytr46H8XJpm2NWYTFU",
  "key20": "2rA9w39C5xtUqFmNVecPKaj6mDcFLS1kVzctAYAV9bAPUz4NHUZpRkJgAdrJrvNP5nuxPWYG2GSoCqw137ieTvE8",
  "key21": "4khYoYBmvf5dFwNynJ4nBGdxdhhv93SzgoYKYnnGwvGEJbNTuHk62yyUaaaAC6zsa7PQeRYyY5gAUPf4kUhBUo4P",
  "key22": "3ergiwNJZ9s59uefFiwhLnStSzb519CxjKd1Mdy5FkV3NihqZcsCNzSmMYy3RwnRxEZWfs7oJS3Wj4ETWxyx8sEB",
  "key23": "3FCVw6N9JNqJ4VrinDHQhBfABnqESn8EPFSXwNo7hthR8kpH6ujutjSRyyWSDEsBwKoTnq9efL7uSehcK29ReP3E",
  "key24": "2HBEKKaP17ccL6ye1EmmRvn7ueckN6z35Y4vvpvefCL2tBYbMqxzcUbHtgWZHuStHRcvJfeVfTA9w6uXpuKGJq6i",
  "key25": "5zLdoG5YC7E1QmG2xvKUzWnD6tugLaizLUXoqFqder2JaGq1PbRiZ9yJSBg8ed7FHDKbEHS5v34mUH3pGM8isEbk",
  "key26": "5e7obg41Y5fXns3C3PhPms8nXSTU4y78qbxBqe2s5M2LDRdJhLAVnAnpYWeXeyiwyHHnLs5EwzP2netse7NFVUTP",
  "key27": "64c6upsds4GV6Uhoc3JTBh2vh8HmFxczgTsiR2QD4AtESSgeJBmbQXbTG93AkbYJFA3DYk8DMXaBRvGMrEkys98y",
  "key28": "36rvjGMMyHspW7TKAWZbCTAGZmMsTwp2TaRQZnXHTrhTF5exs5xwmJfQtc9e34vpKcrUDNiUkKPmUBXDs8uX7Pbv",
  "key29": "8nfcswarz799d6vH5jYp3ZHCtxuDA9G5kDUQX4kkviQQXKbpXnALoVzpfCgdxGBNWVGP174VD8CrJV6mrrhs1Br",
  "key30": "hAc7drKtppSLfWd6rFaKoPwQjFqn8dr4kGvfEPoidExoFXHY1QMSHdG7v12qoHpncBzmMeNFeXpb9RjaXy28SpX",
  "key31": "D9MEEkUFGszdLggsiMNF2zvZMFqtWjAQM4QYQjSY5rtMDg7mTg14MKCBJd7ssGruFqKJDfCk827wTLntjFDCWsm",
  "key32": "5kLZQyEoQKyopvzPWC9Y4dyWSNTJ1yKpRSUSRv5Y56KEtQS5eiYjqxRdFCiyprCNygSzrTyDhuEwEs7UMuXbUiHh",
  "key33": "5sWiNxY1h8MSLGehDzZ4mNLv95a117EDNuYP23XubCQGhfaBoo9vYjM5JE7UvJYoSVZJ8qde8R2tzm4eVgsnmQJ",
  "key34": "4UGVSa8CE3hxcs4NaKJa8HWnZtffnubRGJFMXNBPzYAzNyS2dufX3WXgXY6bwm3shRfMKBjwECMDfK4Z7tdznuhr",
  "key35": "LSZDRhVc5t2Bf75FC9Qb753ifYkmmGNz4ud98nHBahnQj4iUcqjTf4jDFqpiF4pa37dTnLCsPchvxsWwDg4Ur2M",
  "key36": "5LA9JXNHxnXBVqcJ7tLhzCmHsnE4QsxmV4e6wkhLYPTYnyFJJs8C6ozvT8ZDT8T4Hf96o7PJywi6KwbNQa2phtxU",
  "key37": "33TsvVdt1ZwvxXRATx2Ys6TsUHqujSGv52bFR3su89tCebk1xqwPFWT755s6UL2rVN6Y5Vk1s5i6sS4szabn78U3",
  "key38": "SRUTRBdWpKtGxGdNGj3zXpB2VhDntapHv7cKQFAcat1JG14DTzRG7B7EisuFC1rosiZKUE75XPPjNDEFEU65CTo",
  "key39": "5a932oG475ESY1tY5qSVEtpJeqDspwL3aPa3u2ptUdQCQ5vJMQQ1brNS4JFvLDymkZwXXepQA8SqXfBCyiEH5rAK",
  "key40": "2Jna1YnT88ionY3fYJgKYkN6Sn4ef5BJN2xX4PxdZTJhuDJtjwKHJ23mQBPFEijswQp4Zv1NT4SGkJMEHppgY1hr",
  "key41": "22VjcX5DBxZeJGxseTCjJfvptZg14mf8K7ag6b37M5Hb41Fv2gC7sqd8UqompACavwJhjNcxgHiuauwMxYvMWCwf",
  "key42": "5Uez2GhGTLjYbriqM7fQy7Tji5rjvX3cxVVp9Datse22c4jPkgZZYU82QbiebjkFZQjdtHXUD6vFggbc5VfZQ2sa",
  "key43": "2jjmfT298oFw4ncWss3H9PaWZzvV66YaKVgegLU4DUkZzh9xkUaFXn9Ng2sgTKfrmZKrQPH4DNSVzSgk32cZYFE9",
  "key44": "4to1JUajBt9g9KKD4NPnFqg7QSA7zjABVb9qKkFBiNpKvXeETLtYZPXzdSMuxQC8F5RumPkuSPJqs8STeU3xkGDZ",
  "key45": "ATDMKF1h2YGraCA28uFnrRYJYYd1uoTSoa4AoMjDv5gX91xJScQbRn5V3nRZiEX39RRoWEq1N7H66DCR9KjDfaY",
  "key46": "2f1R5UABKTsEJeF7y9zixchzjy2zsfmpcd7jUCEgXva9FRw8tTwotVrbfJjX5xzK6MJMSuGr3KqdtdfK8K3AMDJC"
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
