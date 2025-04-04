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
    "2bSD1d7gHG24iHoUnc7XY7URj71mhM1iS9wUE3E11s84XZ5uPUgnNkjXHr1jjyH21McCf7RwBNTFRCeMxU3ucbbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8NuMzyDnajhb8XaHnFCmRmGLrvSShFRykr24Y5987D1fYNeKBuqNZZTaZCcXJbXg2MQd1RqB2FKy6daigqP7CN",
  "key1": "5HqV3u7DcFeTwmq1ibFox7tSYUmvB2dhEZFYsUVuVpV4FDpcis4hj3pHrPGD6W96Peigmb678udjVNU83nGVB7xU",
  "key2": "3oZoB2bcUZgXTcxKFmtfASzrx3UQDJmGBnLpyb3x3uuSQiaPikxWkLYsocgbkVyXg5y2SjJzxSx4t6gbYrNsSYi4",
  "key3": "2xKvWihFhACqc599SiJasrqb9f1gY9dhLBvpPc6wtJY8vN49auNZv4hnWgHa5Cipsa6sm6Hdn2UsanYPC2q6VwBL",
  "key4": "Ux5igktE6PGAmmzuR7HGUJAaXjdUJ4716e77jXgFcQZJraoeftio4Hz7B21z3vh6tFB5FMXSVa4Sgcm7kdqmrgi",
  "key5": "4JuF9Py4BUNbMwugXRHbhifEXuqdsg6rXGw4oXw4CZn4R2ijpn1zXibUG6Cfbo9WjaVYoTSN3ux733QJ4oxZ3zPe",
  "key6": "4mAAqk2atZpu9uucP8DZMwWAnqzmDNv9ErBt36yiU9Cu8kyM2Q9y1uaiFoN9dgF6gfbSrHBUT82jxCmhhDYLnm8h",
  "key7": "MVtKsXcJ99P15SpPQhq2k3sM4finUrSryiJrM4DTWtbNXs8EimkkRz1dKSGS1ovvEmCFNMmE7S8C7vAy92yWkbP",
  "key8": "3aCzUienSqZ2wcCDAe5TZ3tzBoMiJhGaTMjRDBDY8pcLDZnbNQ7F63Gho1BXRU3L6zkQJignN9QU8ZgNNa8NjY2L",
  "key9": "5Mp8xWJ68UbgJie2PbPfKkHBiLX2ckcJxEQ3MzuYp9BnPVGDwe5dgBHxvRxVey7LdfZ5ae6QZ8vmZRFTGfuZvaC",
  "key10": "4Ez8zpS1nAKggT2HhHX4G9VrBcohDboGNN5vNjXMhpVMfxqzaCYY2r2DPeRUGmCeWrZj1NMjj56f6XiePy94ftuG",
  "key11": "5Lpz3PUeY3JeV9y136uoHcyDqZ56EQvhnimBsy86zacro3zbGc1AEqKxJd8qSTmZE32vXQK43QHHq5ATKrBT7VJx",
  "key12": "5JG5D3VxJsLEghjXJ7bEahx9V42pYr8fhcMK3fnTsqTVwGzGdTqaXFncAKuVjoMsmTZvh2XCx3b45MgPsVfwp4mM",
  "key13": "42bQD3drUSZT4zWabGJAo1Y3U5hGfCWDa9nGRu7NmzkgnByWCnkCb1hsAG2uVrQ9DBPJ9jnSA9JpyAsYHs5JPGRW",
  "key14": "4Um1EFVELPWezqTWD4N7H3TMokg4LGZupfGQkmNMzSyEjFjPrDNZAG7v4PgczwYGWuNfw48zw3QYaD8qnpi3GGFN",
  "key15": "2Mfk49Hg3cu7ZP9MY7Zq1iyrNDMZSGV8dczcTobN4VDcptu8ahvM4hfrnTJbVj3FqHZumydsXWgD1acC8u8UuGF8",
  "key16": "62EfRgmSZatZAP6S3szRpYJfwmQuKUSo5R3jNhQn3CDqsCoj3cC27JUrMXQkXhtLDemQR1wZakhLMd95yTccBA8Y",
  "key17": "3g6NrBqhWVRs61shUCNom5HxxAND9C6aBwGac6XvqAswPpDM7fLP6Nfhri4C97TK7aTk2jKhDrAw9SmyxFGHBVw6",
  "key18": "3BYu5XRet4aRgwcLq7Q8sscyi1gAcXjLSV1R5KyBspTE3jktsx6Ccj9M9gJfJqtjyCkUoGg3NA3DMqPdvJaJqBPz",
  "key19": "592yD4L1QHUVLdfVyKH36VW4ANKXbwr8YAcSEjs2RvBBAtXoy5B9iTZh2PeMKDSsYmv673d9Q8qfRXSs5752MKUp",
  "key20": "3VFosEBzkh8iDJiLrgwwiPynJEh9moNm4rhTCFmuiErFTYM2WHKmddhvEPmm4v4dvsZznAPBRVZjmL2sXjZYr9Up",
  "key21": "4o1FMndPEX8XdM3Vq1UfLK7eu4mERHB13mP5knPqqzeQi1TCMzf3PcRknbLfJhXJQUf3sPAZJSHyzoFsqTeWd4eC",
  "key22": "i43pNsEM4hsaoYGrrsWLaeY1kzsgCLq9vC43jrpxwiPThHDMxyEM6YD2yZSNye6UxnhxEk6mjcsXk1PVPh8XvoJ",
  "key23": "5CEYXM6FXMJ52YRuwTo3CmYQFLU6nniK9zsq9bNUFfFFSdExm4pkpydDDEPD4BaJyYEjpyvJb3WXSmbjPBvXoDra",
  "key24": "oNrjNYc79i717wMR47NbLK2HRbCLxMArU7ndekrT4tJxaPx8wYYn6AzzfKfYSwtBSK98JswBCDLoc5RRChESbQX",
  "key25": "4dPkWqzH3k8VkfxKeUPWmAp9AurbQUSaMRSHyz1RbrB1nMZdn5jE8AbkQUFs4vRkQKwFvFQRcLfV4hJfqATpdYj8",
  "key26": "5Jj6pzsgy7c4cPjh6Gv5r6WZJoJcRWDoM27vF3mmU3weaXckZJY64sbVJQRySX2wUAnmFPxmvjrRSYyXn9NEi5sV",
  "key27": "4MnQKZXqB9SCguGZxq952zqhbcuxpmJeVhn8KMLS6sMnDYZ6Y9MyF96tcrE3jTLwk6NdXMwDab8coRi7BveB9fP4",
  "key28": "4iBAq7sT11UQptJ1vJ5bDNhHJ9FsUBp6uXKCG2HdCX4TEGFJoEwnKZaWuzeVMZWRQy7F1V59uifCaBkYHxHesviY",
  "key29": "2gzw5jTCNUBc7VwHGDdfRZyHBkeQVZjv4zEtBubBSnR72aHmFCKbhkoHa7GFHyLG7RswiAfR7goXNM9aUWyfsJKY",
  "key30": "4wQZttFCTydmn1m5cUcDvyAaC4GKnu4k4K9eUT8HmHpZXn1Gv1CiZCUieYgomUnUucjrv5Hj4pTX5JMJzhSm3i9Y",
  "key31": "5MrDbdNBrEuQSG8ZWjzkiuFpfYe471dw2TWEB5SbSerhq78wkC26EwigwUJEZoS6WAMALesBmGg1hFnYCm7C7aPN",
  "key32": "2z8HydormkevFXeU2bvjfxdDoLDmNTegq4X71H5rJZXjVeauwSP5SAYVZv9G7ZANdu3XBcPmCzbK9shbacsEmVwG",
  "key33": "5vHRtzWxsmwCsV9GwW9H4hHdq9gbZ12cst8jXDmsLWn83xKgHap2dJgvFWexn82AmPmpcKwkvnHzhmwtcDSSThMY",
  "key34": "64nrrWdri2oV1RxkhpodcsonkgYjmoY3kb3AjCCsbeNR99PSE5GW7zKz3x22AmJkTAFarPDNv7XwgztsPprPLxg8"
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
