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
    "4x8Zo62v4cVe3pAsCuqxvtNWrcfUiLFEkrn1ZCJpMDwKLWbyUsBdWUDkayF3DaTg7K9Emmho2T9wrn7avMUW1hQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TLUmwUaehdAteRWTrEewJrjXfJh9BPMtqAf9hUn174h4q5TiE1HbR4DLDenYf4h5uj5ematG1agB4yG3LcSaAJ",
  "key1": "2oeFiuMnAmW3sVEbeJ8BSuP1Y9f2pvq4NnvA39T8i31ajaxDeGSvFqpsXZL6SU8nkdBdqoe8xjHZZSzLJyFhhKTw",
  "key2": "57XsTDUTxZsibVkXx6MjQBNzy6hFjMEDzuQQjdsALPNQRprCdHqKXq7CvRebHX3EbgHBxDG18HUDM5tj7Tcp5PGf",
  "key3": "2xzM7AhUAA5LZrYJcocQcdpRLF3GJWDf4hC5CsGvWgQXDSQe2n1Eei42Je3XMVKB8indxazRVBKTm7KwtxfPHCRX",
  "key4": "3KBBE528w72nCtmxgcU8K1BKnUKocuYqv2g1i3DwsAssuvGPt8Kv6bnNxSfvyb1Uy4NphLcW29nQQQ1dfigsKQHu",
  "key5": "5UCqC22gyrDi3XM4JktPsYF6EtKimgmQEc5cA2BoQ8p7parjAj3WXqKvcxsj8qsXfqx9RFCkFaixgZrnaKhysiAU",
  "key6": "15Zw9JYpNFQMJ2X8oRoX9LxFm7EjYo88b7ySM13gXhCA3Q3xUigqxSEqAroEirNjrHRK8BoxpcW5ci4P6U7cfUx",
  "key7": "3eXn3pWHziZMzn4w3UtppkimpYfPWGsANUc856prKDrMMZbHCCodiBgVBsm4jt25ko85et4saA8GQDx4zFo2FNrQ",
  "key8": "9j1kCr8C94iGqJqSjPraYvT6CQWLLJ7oeXzihfu2hW7gfYThbWm7fAmkxA2rhmoWu2DCwyq9iuW6GqNhXcsMHei",
  "key9": "3qFicab9eUBczqdTUCMy5N55WcDvQPTeD2uN42WDnuGnq4BQjcgghwNen2Zk5iDouSFhDcBEx8Z6kJJDxPrXRGAx",
  "key10": "3XzenvKFVHsWx1EDiS3E1FaBjtje4zY9AAzYXbDKc9zohfPPrEkPMo1favBpNgS2NGwJvfqjSbtt57iB3fe14P76",
  "key11": "pCcfFkUaL8J5P4AtSuZp8t238Puuu8MpF3V9emxCFcgFCRBMVaZ127ZLjozzxTyXWNw4AjBeYk4e7C85j3vzadx",
  "key12": "4WxBDcyXZHT6LShwTmgGYrSbXLAhVSVYqdWrmSujVsrQhe7w2zRLvfA3chwGyVoSKAt4KCvNc7825QRXEVQ6xwSy",
  "key13": "5YybxceZ62JG6b1JNXvS33NmobjwaGKEUaGrTujyhUVaT937kTnRcQoHHUf7ZwwdRGgXHfyaVRQB4JfZ66R42hPJ",
  "key14": "yNdfVsY8Wxm615UnU2nrwLoyQ2FDXZvMobN863GNfK9bZ6WT6DTBQEC8oQayEiovxa2Mu9aK11AgnmqjVdYfwYy",
  "key15": "26SSSKygFGFUJf4Cqer43Fd5kLQhBP9J37ZP9SwEP8dnMNbEo2stnYV3fkHQc8HaJYAkKzo97zJ96idQNVZ8hjNz",
  "key16": "66wT3G9Bp6KdR68z6M2BZ39xhy3Bsy1fVAPtd7RtEyKv8yetXsA9DUNBMhNsPdFAbVA6Axon6nCWMaudtvtMCTi2",
  "key17": "4uHKp6J7D9ddkZDG15SUkheYNetNebGa2e3nxtoA9K8wHAsFtTimBydCCY51ywMy56SvwcKDZLw8Y4uxdewq7fx3",
  "key18": "3S5gs3j7X2E99BRzT2vgs538vviBFX623JACSX1QnoZo82gvaYx9p35tdU1tCQy9oForrWsMffhQxoyYeofNdR76",
  "key19": "3eX7rWFt7ibjkZWTBrhpw9k2WMtefMbkTqm67d7AW89W3kyrdJsSeA67dMSy9sMPsY93maRoKQaiELc2mW3Fs4C6",
  "key20": "WQJ3sWx3VbbRx5YnP7d1Hc5C3FN4Mds3Zcf6gasT7bHwGcwdCGhmeBn3gsGHhFT6RSkphwffjUoknvQcfpDfkoD",
  "key21": "aZDwBdz8FQkkA4JxRARLV6Sv5FpB5q6PLxiorAerxP4sNvvPRZgXe5jorogxHZM6ezcQkxp8C86wryenFwRKqQ3",
  "key22": "4Ab48U21YAEY84A1MPqUGZkqgQS4dzNaVozRad8ZffSHBZLB5uDxYixJxiARgshJ2PS4xeKSHBEm39b8tStfQtvP",
  "key23": "57awvsJJ5UBBPR4hNSf18QW75omQ6k9BMjRXz4MiW9UXFgySr2jsm4KeprKXrdLPAVfM6y4PyEiS3TtksNVmvqQu",
  "key24": "4DM5nNohVpeUC4GRS546vXcyKkFVSnMFAspG7bBmhn5wRBRYyDqTZmjxxHit9vJ8o4wfE9eTccZiMkpRp5J2u6r2",
  "key25": "3bNDNXg3E7sWbozmD4PxnBcCMVyv1yB85aMgH3jcD9TtnFiadcxZjbX6ZZvDMRC1dLv6rjpmyfz8ygRsDRSEiuDa",
  "key26": "63Dzv338ymuR1NDe3GJM6umuVRzA5MCj5ukD6kzP2xs2biPtphP4Yi5MMCmJpDRQje6XTKYBxEQBBgyyJFvHSjc9",
  "key27": "Tf4MbPwkihLnFo9ZCx38cnwwbgCKcMozeuQCgcGmbfvC6mgTFoknTg7k1g74hv8eLqvFdm3fveD1Fv5n9c6FqaS",
  "key28": "56dSxPtSF2DAwMz3cxyFuqrTAC7eFRXqS4iA3fjtzYoQHzHQW6A7HTBNWFJfxxZes7ybDaMYnoXETnPnbQzXZ7CJ",
  "key29": "49DehskRk9HkbwWzRUmyrsTBWj5p2zyht4oYUgPva8TZJwCaugPoqgDVkz52C4Z4yHinv92ZuTwVj3sV3sn9kYbx",
  "key30": "4Ei2ULp3Z2Bag4AmhzCSKsCDC63pUxipYnfhYgoV3M3pqsSwNmRVNNi8acD7jsEXPFbQ9ZzcnYPXhViWCaUcDh1g",
  "key31": "3arT7Z2oGQyJKqUz1mmsWXyNQNbS1AUe9SGzxWqYN5UkBB3HG2qLH7pP9FuuYaNif5mKz6BodiSytqaWVdPbFkD6",
  "key32": "3UX8PwUAJsMpgjF1Kdu3B6vNTVzQa5hEeo2ZaK7Enu9JSQAHXkKHHrNxBxJeMvAsKWXhqXqga6fzmMFTp43FtiC9"
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
