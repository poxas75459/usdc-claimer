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
    "3oRhCGUzPaMgonrnt6vGhpwAG1j5XKQ18TaMLU2EDLuRHFaENkKaGZMzzAKAgVed6wLjD74m2zj6FUNvKzXqizLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YD5WVv5Y4dgMhY5UnSJDAGxyJmjMtAoB11o2Bm3ojQuUBArg5tNUdY5EdudNHRUdGpUmbGtqi9agaF2yuFiXeYq",
  "key1": "4rsspMeZbBUt7PFccntS8C94Zej6akZ7wkVnkeud7R6EHN7ArqqBcMs6Zk7DnwbCkkdg2ecYbo525GhGNqShraZt",
  "key2": "3466EaaafqQoTYhocXu1ktTcL5H2VhxpVtVzgNJFi4owSytqebpL2P4m8tE1Eg9hWfz24NpGVBtgSaz9DSwdngn3",
  "key3": "4Jg9kkMia3TM2DKDcpWrNVAArghFT2NK2nWEziQqfnFwHuBjoxodp2Q5HUbHsjKjEbgkNgoJUXbND91xvTWZu215",
  "key4": "4oBe7xRgC75q5ziJk1v7SmmbGuGyg5guBnMx9TBB2JHB9e2TcDzXT2awGADtPJhaQiT677GjDVHH9bsSpkuE3Twv",
  "key5": "2kGqWryoyyXUKKzpKvXQWn8HcfK259EyUvzRiLbqteRP2ViC81Bv6Uakod18cM1QxRN56JuJvk9M9XYtmPmMLZij",
  "key6": "4znQYnHB2rCeHHbruwQZz7khzUcZ4NCgGaCSBKx5eh1morCSQ36U3z9a3tocATRyQsd5RiZ22qNauUnjiAW1uoUz",
  "key7": "3mf3ZKajLJcFGyr5pMnjVMmirKggRGWuNRNMdCLWc3WVatk7miFRfNS3M7p1ZDCmRqN2LjNbwFhnafbCLMKQsXUm",
  "key8": "3KS2qPRNJLgvzH4w17Mxz45XEmp5nFwdjM2KSUGCieHXoo8JaTRAm5UVUrDvq8K84UZKCgTQrAHwM3pJPKQsp2C",
  "key9": "2CrG7V67zrsSni8GMeKYWbRtTsjzzGza7xfWvg7Ce36ALPnt2nkWaZw6bEWziSmdSn8Uex9xbj3wrneNQVr26NcK",
  "key10": "35sBUJaaHR7Z4LzSPmfKKJNExPF1SpqJMrkJcXqmUCB3nwwWUo7rWbTNqoipm6DnDstTaZSXgS4y6dKvdryG7b4h",
  "key11": "5d46RsjkpaqK7SpN4hA4TunisTJSL4PcJRD4YWTzL8kaYCxEvSnoEMkQC1ozAt9Cxwct7YAxb2zeZ6hAdeqtVAbS",
  "key12": "2hh3DSgczoAdKfN3g23iErXbVWKzNqLK4Q1QDu32hVw4DnSrYtSwZ2xytjhFxKYjsk7phbPFNNbDEn9wNfpqEpEN",
  "key13": "2MoMttertLqp8VQ2ET64Z9NVeakH4g1PLbZB7rG7QEYtHwWEZSSii6AV23cgUtdTg1Sx9bfdX9tv9uxSWsFto5xa",
  "key14": "8zbUaAS6oUA1ZJMqLWHAp6c1E2J5eqHuYC2N2p2ybRL1c2edCbfyMzSYWCRibD2FQw9VSBxYeaeGZu1cU6F2iyf",
  "key15": "2Jxp1KkhZesx3eBBGnNjNfEwMCKKBRPWA5xNf7dYTiZkPFkSfvEW7KPbeA1gmTznaLpcha44qTr7Pbn135Uadbox",
  "key16": "2VbFMweMzAQx9BCjDyhpXnV88TV2H81xwDUn4b9nLPGxB8AwBL1DQCzrcMyA3K16fB4SzYZ3A3xqUEksutciLQge",
  "key17": "3vXxwcDLuQXdGwCJLnUSeNP3ePqj7aKxeUgyBhUtCEizVUTM74i1an9bQAF7ZfHAifrcmJkMyuZLVV8KLsEiK2Jj",
  "key18": "66mTVmTBbx1Ux2jVvHjLMti4Qud8jABRxkJYMEueAktNJhqddpJMXojys9pSNpbrLvBG7BSH5xLKz9VY18Y7Zz4J",
  "key19": "3M4XhwkX4KtXazHsYaSqhrP792CAZBNKE1KnMjFLCE6JqRyY8ug2BHn1byWofvZroRGMkgrYhgHvNVrVCnQiQeoP",
  "key20": "T4enCpC2rCdpypjuR7T4EGehPG8sasYzeNkqJiXoAx4QDszhkt3K41U2LN6Ts5mnBaM2pE4cChiUpjezTUrxKcT",
  "key21": "5BGgzKyaWqJmcscedjjHzUr3t96doHuqVSpoUPPT91rt6rNpqLDQ7hfvZQxmr2tybzppcP8EUnueKU6JYMzJtTi1",
  "key22": "5JCWJ1wGv4JKpYZBVhP2Qc8nXYMr863bCCsp7km2L8xSre6ri4X6sHkcTfeSYAkmosjGRY2Jdb6mVmLHMd7yw8VG",
  "key23": "4oFaHQn519Eifc4u1NFA1GYqtLEPmgt9scqkBELFub4PZhGGxqUiY5B2b8QwNDfSYkv3MTDdwStSNfTfaakgF8Ug",
  "key24": "4yh4XUHdBrJr1nVu7qUFntPsRgMEYdqJTLFWtACebvNntwYPDmacuFEQFtWS6RYZAHACHJg1Pax7fFPXsMzaXTWE",
  "key25": "RCdfxeSbmwNfvd8JLhE7B6pggSVSuoqpHLtSiiNc3cLyDHRdn9QxNyfQmjrMxQ6K2XoKcgYDCJT9cqqyr4AqoJz",
  "key26": "5i9ZAkxSMTUNntyzQSGuQMviwS63cUbH6rsLz82QuomxzUVXva33y92GmmiwYZzSPqBFeMz8rwCnJp4PjoVMD5yc",
  "key27": "2kQDxSWMYamQjBjbefNACTGjxDSvChYQ2DbgT3aWwKh98SsiFnPxPWWBXHFrQj1eAUobHnApKiaUAbbJdB8cpeK3",
  "key28": "2hR3DgdpnFQYMu5M3iZ3HtwbTxuNux47ANwoZXzkStnVCKgXrCPHiqesaZDGrQBUFY6xd78dCqfZFBrC28eiWgfY",
  "key29": "2H1uFZYWximSZ2af8ipyX6ZbnEALF8FauY6oy3qw2mWCKRsZDwawTtTm5AAA3LPp6w5Cn3ZozpaFfXDVSycdutXM"
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
