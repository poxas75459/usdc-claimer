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
    "5K3Jda3BdfA9mgvbS7LqQJpwwFgT6eA95Dw7HA6afJZ7uJpLyYwwrSq76qX4s7bnneGz8uvVWteXoQ2HR2Kzc35u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NGvhmHD9ndwGjCfYvfmnL1RYCmy2QwbbquQVZ1Ud4qbuvUjF2WR4wex8HB9TNEidGSDgLrQdpr6chgDdhgbHBqT",
  "key1": "9E8yk9sfgmFssSRcDR7kWbE3SAXTYHjb1HboRw7v6SLQd8PkNGyN66gPYWbyRT5a3B6nigyPkZA15Ud2xnPEX7Z",
  "key2": "27pMvfNL2ubR7maw5xecVmQWkEGU9Kj9rdFf6y8A9ooZ7jjL9C4b5i6peWSzvzm2vJELueCqJjGEN1eLSFYtFPT9",
  "key3": "32jcLZsQBVT3RMjdSCcGsgsj2p86m49kaUuhwHjAsDwTbSJtLN9y3PF34wacXWGTyXP7DWH5D8NfTZByKSLmX6fN",
  "key4": "49jpMbLdXDSKqs3fiYRwskyzFP22tDhWAcKKahtmU8frjw9J3ufjkvpXP2g25Qp66KSBCPQF3CTEkLqkomziEMeW",
  "key5": "38pkj8Cn4eq5K1jrxM4nVctZ6MryxQRh21cmb3VqfXkBia4VR7n7UFwsHFeEiLMTgtBoxQSBuV99MUacWUAX7r9z",
  "key6": "3Rv7r3k5ybrQzCuCUZSMr8c58ThUYsUdo6RGbEQvazKK9YwhY8cfz1vWrwX8p36uvSWpZW6ArfyU43ktkmHicw9K",
  "key7": "9Mri8QX56NuHcyJkdBCUsfsrNnkreJBMmCbSMcwU2FfAv7BAibgZoHoxfsAKE8uuMXH8cF1KTM77uNhQcXF77hS",
  "key8": "4aYXyYg41BPC4NejTCKRoLukWQnNz1geM9zKApKgoLJojUPiWdRDc2K5Rocg1mRvjdK7J7fDyGBxMZayX1WRh6Ea",
  "key9": "48PyAKrpZhbkk2JehxAWgGZiAMYz6DZJFUk8Qk1J8xNCA1WwGoUq8Sef8RsFGkwNDXgVKHPckM2kYQMqjJbyy826",
  "key10": "BahfoQSW4Kfq9SnsqBZeYtUq1nD1Mu66z2tpGd7sG9LjB4PRbgRhPbMMUAW9ucrxh2DFfpSbUgirKqkbiUoEXpZ",
  "key11": "3iC9Fw9VKvXsE7oNBwWvq4gtZYcyFa25aRiv73RgeyVGqcQN3fomwPhC7ucD7msUJTXj2bbdRSNfAoLnHGCYkBRj",
  "key12": "48JwQgmitTtY8EGLftmqhRZLjGQuxj2bcp14LR3LiE8tXGvHBY31BBcgpTygxnbjyBATwdryRBonM4ogWFg1EEoS",
  "key13": "5767w329ZDhPSJzbHZ444xbjKxXichs7BLae2bHTnLj5HQ98yN6eMyMFTDLfk5EAV2HPjS8yG6PrNSRWG1fSihaA",
  "key14": "ZFBoUJ6JgMFiadY9oCWyLCYEb778XVGDtpDgBiVrHJ46vSX5TdMRpotgJtDah4TtzXbfn4nQBmHZS34mZZXFTuC",
  "key15": "yx1NAzacksuuFF1FYDYXtNt4NLFerDUKJ9uA6ohSPbRkiRE5oirmn3gBUtdNPC5Yt33NtGRCHDUbxKJBVdJosSn",
  "key16": "5ayGeTqet1RRKQrnXfj5wEzaUNrfHXizXaPpJ3EVSSYRgcp16V2PwGEThsQN4RUPinZNdL9zva3yGQ3YJwsqShXe",
  "key17": "39QWJ5oA71fwW7mqhUCwsGm3xxird9vFgaNx4yvXfLqRTnqqEXgsjaUopaAMMcAiwVBuGsV2Cacsu4By72h8mqth",
  "key18": "3SbEhBmcSLr5qvbSacQvCURraqD4ZLjbqV8dw9JBfrDMXXiVjQ7P8ebALC2L47njeAQWUm29fiuKYmS2CRrzeAUy",
  "key19": "28pn4o2t5XYw4USuNJsSKqFSjJADWWBDmiBKvUjTtirKfN5kBv5zKDdS8YnuCaKk1jcNPLTz9rhTo2N9ex3TNbtb",
  "key20": "2uzNhcAsdUU8fHwJzzM25jy4q7n9J4yy633U3KDRLWdRPVSwrgB7zT6hsnEKnFAE5GtGocan5gLq9FShpx7q9A3J",
  "key21": "4gpnbWMeoCYg7NjUS9r4rgvfeory9CcQVx14daRwQMnDvk9XVDQvAMM5GRN33dFT2yEUGckQ8ncT64gxztPqXsG",
  "key22": "2wnAP92u3vcP39C23mvC8bCS7QtNWaLBzSRXx7jEHJayaaYdHBCu18gyAPg4dHuBxhi319xZbBwVbtZY657ry8pT",
  "key23": "4juYvVXzZyzjqcpqRYPcbiaZJMT4kU2CLC8947dDCkysdR74RHr6WT9ZXKGPGFBAsjs3iqymXuKGph5opETQqepA",
  "key24": "LVA61rtY3KD5n3YQQ7FRKZKJ2igUe6Hzsg6ebLQMpVvcptP7XTJgJ3jT52tcSt67JF7qEwtzKo49QMgou8yrkiv",
  "key25": "33xL74KzffhcUbVNeHFX18EZQyNdqJkqJEjyNy1mPbEECGA2B33e7VnfNH6NAsvDR7uYDzp6U5qL7YrXS7AbB7x2",
  "key26": "5if7JXFYJDFkfmB2YqVV1oYJcc5oB1oE4PewCynT1KpGoMbScYbCmEMUVcuPJ9pJvL8P9121xpAi6jUyJ2GkgUgj",
  "key27": "5A54LoqQPzW57LvEG1ewKUtpiGjHXgRdBwJjFnqfdiGNCGW3nFfhuXijcKVvgFbthfsXYtAE4wtzXfckm4t8eCAv",
  "key28": "MydsiLbfRuotmKeo6fLzo2cCapVKjFtvV4jG565YTqqCtYAd2os3r81AecbjqWDh1Xc6eH7UbXCodPzA3BKjMYK",
  "key29": "29rRnDJJt52pco3VQWgDsiBsbj8rECBGxqaB4T8R2qf2Xa3oxHRigtexB8yUodRgVMaFaZU58yfyGchESrUHz6Dq",
  "key30": "3LRuMYfd41XiZ83t4n1dtSmbav7pdphjgHNNtRj5eBSrnxPExjQdP58w115jABZNoCubdDq8WVoom6aCLtcJiGC7",
  "key31": "5yYRZLQAfBUGxjAumhrc3pmapqbiHg3W4MeMY9bURpWuiBKdLrCHnXj9Y2wGDRZxUm4mNskCSB5YkABwbgYcV56H",
  "key32": "213bTTdaRCiLXea7j9NKerzYkD4tesJNosdJxRJYFXLQy1S4pDn5AhMSXVG8PU4N8K8VKWzPgLad8kQ6VPHiKkS7",
  "key33": "wd4FUDKWpk31N9Bn7m8iYvMB5R6FKrPDZqQQnBDu457Nc9in3fnpSa9KTaEAJhmKNaMVy3hAZ26cqmsUkquJbvi",
  "key34": "4wZA53KRUYz1iS2mmdB1hXsTGtSmaixd8vApTCeYok6U2QbMgrEodmhFVARQfAhhJ8uyLxEe66i9VHSoLTW28Eua"
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
