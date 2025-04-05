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
    "21oCp8voJGWTUb696cvJhn7Lfe29xEnb4mqhMHb8gTbiH7sjBsfvECUHFbkpHVvtT63baApxchogVaGHrUm6AZRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z5fE3v8kRrRZg8oggWnELptfnEq3tWj8cchUihoQzvYhAUDko47cKhDCzvg7NqPwvE4h8iCWa11EAD6oQ1bpxog",
  "key1": "2DZPfti3W6uibvRifKJcYRpa2LguxRSGGpvpop8H8T83pMvUCGQDU8xCJ8jcQdJg1uVjMhKFBZVrdVr12EAwFZ1m",
  "key2": "5MgRe4xnEePomMrsfYgRfW6ApbsTo1kScCWbpUb8DnZeQshU9oxwBN2T66ef5tR3rZvvpAc2ycWzyfaMmKNuQAkz",
  "key3": "59B9Wnzc1e1fEJt7Mf4pRb6SmnEwH9iA6ritiMeEtJFvxmng9bWBWUaXv5KTzU6fKYKTQvJSM6QhmKQYfRwtMp6K",
  "key4": "3837dxvWJcq3Mv3bYzU5MS5HesmfPagfo2fcHmwBhCAxGprDyHyGiZg5y4dkcPp5M5gDANxxnD2MbUzHb5bBEHy8",
  "key5": "euys4V8daWbd8Un8KkhENnU23tiT4kTrcDgehenGDmsRNjU4szfxhwxz4ExuZVAvs6BsxC8S4o2eanAntAmg7de",
  "key6": "5fCapW1hNQhrDjPfMErQ622Ui5r3MH1d22SFcWNWSkBWGF2tWvssrivj88vbPfpV2GSkGPdcKpQf8DCk2tBFDMaq",
  "key7": "3Pu3W6m6NJ75iNHctzXr8DcTiBpweurBRQfwuahu5cHXk9eTRgzrUjbypAR1xL1VzKgrk5qCVJdZqUbdvHxfeubB",
  "key8": "44Yhf1Atv6fjaPguXmURsFHGwfLpBvxekf9Cac6Za8jy8QPYkFGepEbShPc4ggnevYiPusDySsAihoEFLErKWmsn",
  "key9": "3vphCQGB5ar6rx5JT3YTZGdowVbktmAt2xQBBg43R5Dr5Ja37jTPPA8QUZAkwT4amfuboKEGmjsPXNGbPHCkTMvY",
  "key10": "369GPPX9YbRLSYQWgAxT8668Lz9hLKFxzBW4ke2Us2exTXpGwJVhyE3FQRrTKSWYKfEUaDdcwmuvYZC9Y87wGfPy",
  "key11": "6W29PuyEXrW57y1CFmsgfx5H1SWGRMrTm6CEiy5ZgMVKWEtAQq85NsPUyMppwbAj6fJMPFRzZ2zff9JxHztd7r4",
  "key12": "3CirGEzj45MNfAuePNauc4qojqEaABPfa2ENkUuKQV16xi6TA8bLAedt9xfrQpsA2jZ38XwBfVZvPbCaf6rVrSMz",
  "key13": "2iQFDMVMT7GE5Zz5Wh76US7ocEpcwZoF7ofVkQuc8VMWLUNCEcwav85WGGbxMiCRYY3bsg5LmFNAm1jAfwrfGgmp",
  "key14": "5oXcHSFe14HBnYuDiZv6cUcz3msbu9Z6BgBDYCfwe11h2EneSQmwvLbHTqZ6mArAcgyhAvptgTmMTuJosGCkcUDH",
  "key15": "5Ut9yBxqzcAZSWFJNionRZTareRXaMnDfse1koK2La8tvAmEV6XdT7mZ9WSH43bsHeco6dkG2GGH44wgtvbfbrZK",
  "key16": "21hcRALouL2z9jRpjvXGb45NiEAanDSEbyWaVoLWJe4vFdLXXBnGpGaMiXBM6ZZifF4pzmCzjBa1sjR76XpRZX7P",
  "key17": "tHkUbGqykz9DwLJA8BwjNtNETWnihYKJMk8BdjKjjzQ88ke55UsgtxRrqSX1f88PvkLBQx63APRXBb1a583Uvip",
  "key18": "2H4rJVkS3XGakHVGs8i4Y2DncEfbCj2mpgQEn3wpexMLxW1vZBcjEwequVXjao777LWT58fgYyoh9zaNH2ULiMMP",
  "key19": "2pFj4di5d2NdsGVrQMQNM3RXZtoFU6VsjsRUVfNBhqz7n69s5acLXhqqukbG7KcE3eXxzuLzSEcnoSqvFcoMZqv3",
  "key20": "3fmmpmSrg4vjV1MVzJv14GSFT8kwuX6txDZYqMN6MHPJH2UFet8Jy7tGEgwyvy27tdxoKtYuHQX2XNqsoV4uGaa5",
  "key21": "9J3Z87gqNHdYXy1jPA53wfv4f2faLFhdW2ERgNPBzED4URZSMVCMWH5WcZMU1wTBbRdVfxGCQFep9JNVyNNeXdx",
  "key22": "3HfgwnrCuJNziiQV6zGY4TPC9htzgrqH4o5qtSaFHKV6B91ZT9u9gwEQMZz5kcRdfEr1gNPM8hFMJc1haDjYPmmw",
  "key23": "oDHnGCou2KXLoTUdtcTA1dhfaUrynB7QQCWy4BCbS8hSdpg2fDkTeTphKNXnK2j7zmfrhsWN4oYkzj769GcrX3N",
  "key24": "5vpPeCi84q1cgnfaG8EQDv7krvijCKXY5Bm98rcmrnqSmEpYe69dJweSfpZFXBobjPf7PC6YUswSpg51pLgWjKtn"
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
