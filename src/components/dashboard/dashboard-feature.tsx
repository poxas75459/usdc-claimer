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
    "2XWurRFfEFs13k7UYCu6ZfKSWW4EDB3wwDcE4rNBNjM66EGRfFkGgcZdRvxxo9Bz32g8HZWun8bToqWP9DwWXViF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfNm18JEAenfHvfucGH9NN7DQyTwx6np4GBzmnYXqCdQgHR7za68sKtRTPQn7nwcemdshmzZQH6ZTojuPHG4nLp",
  "key1": "4uz19zwN68G5xhTD7Fdb3CgCPdsh4WVHU9NwxDhYRJ62wb7K59Bct89yMqVmNsvu48KKvtqVn5SMwVg3r3bkdcHG",
  "key2": "5Qz579qrjXw9PrYWHqZqVFpXfSLTG4qJnw4pqHxkCHaRqJMz61FVGGB7aubs21EovRfJ89XARdJqN3gcTEfSRJ9P",
  "key3": "4fe2eGL1hxcpNzKNPm1Dgq4ApWePVTNw82aRU1GMrdjH4T9gmYm6TwVtFD1qRfYbsFY3cyN2h5RA99ZAtHkYcVEN",
  "key4": "2aiW7WiyCw69uYfvBVF5fFuyyUwsEQ5HBNmW6wLrPm3nWiiZd6DQvsZLQZK8gQ6MfTy8y9yv8zF4RX3qpiw9p9Vm",
  "key5": "5P9tr1LTWLPgShZgpdUgobWe4Ar4LmvW7HHdCCgwPLMcYCAbYXftt8fXtSqxGwJF1ewDqH4nMRrwTqH9MtJXWpxD",
  "key6": "3N2yA18Rr13BSgauCkXZPEdCrV5mRKwjsWm7oSYMFRRPMkWsWQ4Mn9gXrauAYswzbkxoed4ixXE1CcEmUruFTXG3",
  "key7": "t3kzRoBqySpsBru8gh9ko8NguBYcHbv5xawjtQUeH772X131e9tgSoktAcj6SxK2hGGbstLVBhgGDvi279DqK7R",
  "key8": "3yWT6MwzdzHEEaDG2r2Mhdu19fYFTXUECwswEKCtKGiKfCyAT3kAU4Z2h5rcNtXQ3nK7qdUetewGncY8N7eRRmgR",
  "key9": "5mT239562taAV49MXtCiD1sPTtaFXC6v1CjPeSJK4vRumvUS8Yqq8Burg6JT6K1VWLiL4XDDvJWQGTXsYpa4NXX2",
  "key10": "4x3QL9zjQeXxzQoh6bRE4nzHGoZQesdUueGZgRDcnvWXzjitoxA36r5zPK3m6ApuT5KUnbXPXHV3EfMzhjikpxBw",
  "key11": "4FinC4u8xKAocoi4YxF6Z6TsLGr5KXt2qZZSFnyzCLmjQoui91Mp2AjqR8hQES3bJ55hJBPKMMMXqe3SNKvZ2H5n",
  "key12": "4gU6aVsfhx9CCvQXjczewaTJQfgX14FkYtaqLpHYqcec5M6qrVz3nsG4EsNrPShLTh3F6sTyqQqbowobBSWyPbtF",
  "key13": "2Jw89cw6pRt6fWJUZfC7Vb3p24Vjw4cv2gD7Uvd4rxjhbUUVJQELeVt2rVfHMQm9AofgpkCh1MmkwzyGYirRN85T",
  "key14": "4QszsavEcWi6YuTRmtb42ZbQX8JQSoRLEK1GXVtmH7T9Gcnbng6VacZ9vgRs6UGYE8iu42Jc2Xc23gFTs27LrEFF",
  "key15": "3wg67xBdPJbjjnxi3knXXjFwtF2ATfKAGMnS99kaq4ptGAPKa2hKaKZDDf74HRmNtp3ch5wUD8otncGYhv2eziPV",
  "key16": "EvCW4o6zipq9jGGV1FzZDNWTyWgxx8a5Uqqiuv6oNqP72TtswqGJewDxwikUiHma4b2HFD15h2zTmUTri8Frro4",
  "key17": "5Yu5ua8hbUbbUygPSQkqjCLSWNdGazT5u8ioWonzZ9vNzNQ96p428pX71taLA5DRBKwtDiyUs1q1ZfjfcqLfkgg7",
  "key18": "2qRj3MaPGSLitfJ3zo7GKzPbXBxNTpKVkaXeCWZBCZWGpmmDbwDQmosjrAaJ6fXVHPg4bzX9AR3DvYkpa1WcWj1a",
  "key19": "3yNrYZzNhpqtE3VceeCYxBXdEjtSjFsF8TYec43rVnC36aB1usxxhvt8bQgSUxraXQrMovqQRPxRUnYw24VFvoDS",
  "key20": "2QBAUnbXRD5XM5pYpDYZvmRKU5sHBkUqnRcnKaaC9fDXHdoThqjYsTZF7MdUyXkqmFPJu6zLZx2wNaiUVSrXp9CV",
  "key21": "YukcTcehDqu9MqvHUKuoz3QVTeU3ZZSTeAe7y5UU1PrqcauC9VvykStYND6PFEewX3gSXqyPeFqzykVEG7UJvzr",
  "key22": "31ieq82xU1BhbF4vUecPtPW3yK2NbUGWKA1vMEeizL4kxoCTUSm4LcQ9Szs6zLS5YdFFNJci2f1FuFufJ9KjVPif",
  "key23": "4fkQMjmh4qP98ZWZHQzPr5ToFFM2D9wnSf1Expioa8wyu7x6HzUE26oSGrPtdzyDXY9b3ZH6dgVUbhMFjufagn6S",
  "key24": "vo1K6mdxwTE3ngKNJ2Nfres2bEXWcB2TMbeQnN3WEsQACEQxtA4intXJAE5QCH9XeUpSEQGkTxUCcy8eYh88QpG",
  "key25": "57GXLXbSq9MpK7Ee4jPcxP3hE4TJNiLNe6ibbEcAUqL8CdixvunasTUQT3jMBpcJxSA71qcUoiAKeoo9r97FfrYw",
  "key26": "Yn1kUCPE42zhd3HC6ccVP6mR3yNfkuwef4wC4w3aK24oXRXPpee5vwXs2sG9Zamh1yvDUG4R7cHetx7WUMzqNrS",
  "key27": "3WrbGyZiq9YJtucoDbWjoyTybaHGxsmHEicusb315aApPZToPLz7kfSmLiPa8JhVdR9NNi2YoC8uMr8RGem8zpQR",
  "key28": "3zSWdaXxC3EKFaqsX2rL5EVnqZwkGYGLcerm8761Av8hJMyXazxSXcPnc3hSwLm62i9SdTUSsysTai5cwd7Zd2Tb",
  "key29": "36f23ftwEzdt3FxvmKMBuEmX7MC1oBjJNn4djBGfkGkNRR2e6pEkCcq75VPUKMdL7dkCUctWRTeSqnGsxbaGyPeU",
  "key30": "2uCyrro6tgW6LbZeWnq83vXmswqo6kW45Ti9LhcL2NHgsoSsZVerfEa7jKTcmftb7qQPEYfxcn6gQR2V5Zi3erxo",
  "key31": "3PuKbwMrYKHS74fdKypyc6qPNBAdJAooV25WnsSZTHzhJb9YhuWsDw2D1aZ1FLxtxoZK4x2Y1QsGDSAAKR4f3rfv"
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
