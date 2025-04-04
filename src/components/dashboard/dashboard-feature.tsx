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
    "5ZdiVWQAVNGdYdgkw2bBbxeMTScKbxXr2WGN8bqZZEtJjvgWdhU37mtXTbN2g2ndhjDu71LyQpuxE3oDWCC84Qrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZdxusJ1FuDapwX2xPDJ6WcPVC54EbcaNKV85uXa6r6DLZxYG3QfFHZVaJomnTQBFEGrumd3cezfJ1wMEBwZKq3",
  "key1": "5yH1S4wo2J9fgwZsfAid4AHHwJECMJKBwJSrAHfwKbjjLfe9yEXSn4ChZtagTtK1ykWgR8Eub1PFKM1AKDSj67DT",
  "key2": "kRE2Kjp5h5Yg7k4xGqTzE1eXcBkYtLavQ1cCT5YzVhYbcaqbRbQ394wUZJg6WiSsSCdkaCvF2uLfSaFSkQbmc1H",
  "key3": "hBfUSEuorMUwDD1nRh18JQpeDkxpGGzVYXRp4Un1qacjiZdXqNJBmrejqnQ2m6KufeiRvxMh7c5NfH5DWbHjddg",
  "key4": "3VFxMVgUeAtM3xAg8ABFzu2szTM7yAn8f6XxRsXFSKsWxZoVSLP2xi3fZm4feaQLy6a1X3gytBp6JmphCLuZPA6b",
  "key5": "3C9wbBG5VnRHEqinmVkTYpsohfEumVQU1hYNDo2FJfwxf7J7ekNBEuNvB5pWo6UGHVsL54KqLBfzLJd68xnpvFQq",
  "key6": "3KWhrbwwt5ke76sEZrBKjzgUjKjTH8xSfA9SRaf2WiyTFhFxUt3Fd9QB6VEEhEtrTRa7nT6adcnQKJp7L9teftjr",
  "key7": "3eQhGDL6tzPqQBe31zWrPsnhX4pSMhXbCGxzAfTHGC3Kpmd2toYGFUSLhC594kchQij9vyXKFJ8E41t7yzuU8XP3",
  "key8": "sMGPqYaiMp91nYZR6WcZKaNhxat3NVSNph1SU83HGi814SaHTsrZBMKkT4k3Jy2im9xmwqryMwWFpqHAZR8VBcJ",
  "key9": "5V66madnvdzWe5tJkM9nB7B2tREWNsX3iN1FLyv7goKZjVALq6mh4vZ1f1d4F2UtnWsvbiYqYYW5TBDaw73ubNoB",
  "key10": "5y6KXkHarb5vwaork2QwoA7wSj8FhSAkjJv5Gp3pTJ6Jes2NPBjGLSKWsY1e5aXJxgRTS1twSqpji7DysgrwdZwi",
  "key11": "bvPFmxuxyPDmoB9hgwR2KmFmg7jFeTjMCqemhupsoLHDBtS3zg926p9rVBtWfGGmgYHyEs1Uncxxxu3eieUMfpw",
  "key12": "MCzdn6yvgh94ZMHyniQuuoF5MJsVqp3rapdGLJy3LiirgXTfcXofY4GgS2A17txUV4kjtmVYhmTAFfokuSJqDFi",
  "key13": "3MPE9177UsPg1X3Qbbihsq7WwcvjF7FWoHvHFyBVTYAGowiA4ouxdnL6pLXwApZVmU5RfpNNxz7nagrmrLF8G5YU",
  "key14": "4H3wjmDUqTyGcYhNEC3sMAZDxg6Diw5MvK7gGgnmpGSrYieaxddvabj4Sr8jFrS4tHTdyiBwybVibsRg4EjZ9tid",
  "key15": "2LuzVCUAgdxuKn5nvMRGbiVznCXiABFApda3iunEfzgvVbLzhaJJYfy5VjwCN2AfjH9873cEDsg7PvfamgZCeyPp",
  "key16": "2vs3Gq1iLjwyFfp6KQLVu8TAmUbuKfTomYT8fDccDxtPC6Cvj2bySJ2N4QboWcF8DHg3R9KtFjW9hpJokpimC61K",
  "key17": "2vxmfGwPrbyDAFjkMCgiWcrdY3vWCMns1p9wGwgjKV4Goh4DQbWEH5yz9ENZoHheD1xyCGLgHo4Npnv4pgAAzaJP",
  "key18": "pQ5x7NoVqFJxEGrrTFBxgp8sjAWi4pwkgYJnie4aHoNnDkmWAhRY5HQjX2qSYATpUXHyx5vLAh9Zch2gogQLP2y",
  "key19": "5RvvR76iQLMK6eL6nPaWQAyZBAPsF77etRwUHCvwDbef6CE5JzCWgg6yCG8yGBusq7V8L9BdqCcZigSBNGzp3Sf3",
  "key20": "55Le4ucGpQfPDxYrituxHKRyjCS53wbVAbzmjgCHFArTsnm91KY3NJCDKMSBVMJPY4Khapm2HRsUKBcpxk5Nu6wi",
  "key21": "GtUryx5BBctr5LsVdKkHMicdRL4HkoLxetedq4RS6wScpRumPonT3bGtsWShE5ZRJ6AzP27YNukuoq8ebSWC9Y9",
  "key22": "49WZzPkSbTYR3uHaPNvCqXnnoWPdC7cYBA3oSYG4QKEeBoDXzAjuamB4PfdP4RsF28xJtva4my3YBQd1BQoDBaYV",
  "key23": "5SwHhSiNdnmkuTq8XzLAgVoCU6Rsi2ejuHm85RZU6BRqXWRj4yg7eocT41tyUgg8iw8XrJnvxPipuUfRVELzEZUv",
  "key24": "5VRyVXS2W4j5rUqRPG5mwao2SgFfePvxXjtqFDrZdKoktbZz8A67gsMFGdvJTcrcD8bMZUDxzJtSD4bQ4STN9wUu",
  "key25": "2KpqVDP5HLZ8AgLT4UpeLXQizthMwwxhMLyTPX32oV2U9TffJuhiWxAgfVrXNLqNfu9h8dm24RVLvURVuvRVJ78b",
  "key26": "2U6mRTMyjXFUMZudiqHVMGWvHoeNtUbUX5RXSdfmHzLbxK2Fqe1SPjjiT39tT5pv8ksnmJrTzMYyDp68gnbXVprW",
  "key27": "419o6XVjrZAm2etwqYeST77robZ5KxSMJg5nx65MUUWkV71jE7QvVcKjVPpV5vf13YBehmhzBvLtkPkwtQrEczUQ",
  "key28": "5hS3X2A7G1o4Vt4eBhSqGjXjWN3MmLyqmsyjzDyDkZyf2rx9TkiLcE9F4bKrnfCpHfHmWcGZkh3cwaKiDHZcZfrU",
  "key29": "cdbsd89Aw4KbRhaeWcqGeG89LT432udZui4pUbd7UnfzGDpvak1J6qTzcMw17mtGBzFn8hFL5WMyqtqrYSccA8Q",
  "key30": "2FvG18PcuXZAqMjNrTAGoLTWvrm2odCSdcWDgxRCeuEtVk3xC2r5Yuk2PsjEtzmg94ihCphA23k3i6hsLhbQC74q",
  "key31": "4EjBtgWivz2pDav2RShTJWcUfG2gr3dEeDQcUAb4t4EV85AuGiskTGXmXsRxyjPL5ewAX7pCu2VySGmh786uPN78",
  "key32": "5iQX5CCTCmKLDX9W2JS5YqfA39MV3nuFQjUEngboMajYTjVEQ46atVRUwQi3McTXjNXvX7wTSjqT8262Rm23iMzg"
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
