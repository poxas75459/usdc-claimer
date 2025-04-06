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
    "5YbjiDGUfSZZYmcY3ECuNMeQcnTXDGFKp3iK7b2muRE3h7J6EUUWLk1KP4DuHPUhs1E4XakWXU9WjKG1beBwpRP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdQXALCy7u2BXpwDZkQ7rPNiJ9mMdRFs6XmLw1soxhPqp9TC47uQV1hJupcNx9XU8w45o42Wmu8S3RXg6hwXTRA",
  "key1": "46PGPY37D6No3Lbn4EtbLuna9VQQMGz989wgtoTtFgGdk6CirxVbWSBfVDdH4saRBBH26Frn4v5mhuvWC4VRnoTD",
  "key2": "4DtQXthYbqV6JQAKXnCgeLgBF97x1pdyXekoyxR8twHkGeNCY1RUGhPibCHxwB7rkpRWFRRem38najZXdviZ3GW6",
  "key3": "TPkF3GxnfGEFuoboJ851wLaHyTNMsUZfwhg5NdUCYYYC1DLmV4j8Ukf8jpgd2rNyTs2QR5gAYGoh1MTL2JriNCi",
  "key4": "v8TpCpsUkxnMUhp1WKnEHr75nDUBTxb5FkqADNnQUmU9qGJF6yoaNwJYXgKNUzhpTizLuG1QyTzBTMUBbzEeZK8",
  "key5": "59Fj6tbzVFJ2BYr2nVMHwrFnusWzKX2VA8RPVQ8QLu9LXEMLV1QS4MabkHnNQH9a3q6MdgMfD87hhe442VaMMygk",
  "key6": "57S3qkcixg16GFLTVXsn6gjo5SUg2fnH8idKLwsb5HuXUUcondYbJB445yrdfeRuzvdhBFQUuehwPJew6tpdefxk",
  "key7": "eFZdwwZoeY4sDrzN1iMZsi3pL5pBntrobsZjPc1MJYfKvEVMp2mxRKsiMDtqzWbuAAkTJ7vie1PgVamKsma8MGY",
  "key8": "9zrhGNtxxEitth98n4TzxbGBA3Fwr5h2mgNyVaAfheH7aJhdhFpZWAdYnN7yPBbDtqfK8rBwfYviY1nHyQJQjXW",
  "key9": "3gHmHpTEmBWTQ5FbAYREgzzAGw97gxLAvaZAWq2iz8BLhEAm4gijbabvczdjtC3fr2vA9e6U2fS9LSSpmXDcs8T2",
  "key10": "2HnDKjyB97j8AP2Y8e6NGaTFgbN3ocJtuJddRNYScc7b3oJA34B3xWSYMmfYBKNCAgSSJssd95dhTsDhf9QDcURZ",
  "key11": "4YKA7YV34zJ5rsxyWMuNvUsag9r994LySRDDgx1neEoNw6v2wi1pH4GwQRLR5yKP2xnxxL1i6xHrPWdYRmFEtnBU",
  "key12": "5rZk3W5fyFyAwRpJxo6nLVRuNGk5seKN8jJvezhSndTtweX9x2jPXYyN3UPeBsuGnfdmuNfxtSqJvRWEQqQK72yo",
  "key13": "jTCv6hFYGTF3bafVVu3o3BuCsj431bLP76uuStvsUV8kZf7Rx8dpUSnfHy8ttShfWJw2X5jbCa43pF184qjLHik",
  "key14": "4prMpbW8mHQFTNWfWCrkRQsmD87aJaHYUmMm5PtmcCGy2o77BfhCFvm9gdRrxRDQerQEkFEaLaDDq1UZYE9mCGSi",
  "key15": "miYAzszTgLzXd1r3gWx4rUzvJGW5UgDqNsqFPzqSLVBabZFE1kxXkXKmjQken5MwhwWvfd28TPvaeqeeAct4TqG",
  "key16": "2Ch2mmAJwUk1137Rn6CNBsWC7yargQ8awXSgPiX62wpCfVszAcQd6pg9BmJd1ZzjSD42JoXSdkPDztCpq9zQSosD",
  "key17": "EUYSxVuXbXJMePo58fSAXo3TjF7gMr3MSBWZbsw9fStb9GYPFnSFitdJveMrNpZvtshSjkRtqJ2Jrfa91Ye1122",
  "key18": "5q8vMvRFrpkMtAa1o9TypK2FZA5666Lqb8awvqjVnu15P6S2soX4xmjF7cpbuJ43sWHjBhpSWWedtUVPf5S4XMBp",
  "key19": "3dmTy6MgUfHnVDLuNaxXcJxqANLAwhAzSKHcQ52oEVWt5zvAU2N9HH4XH9npDE1T7DACLkuEpgNaNxGQnPuGgjbr",
  "key20": "37SL9HmrGxsyCk6B5q5MNPoVbz1ceU72sWCFDt3BeDmSToZyCiU1HRCyFg5U3KGARzDC48665LUHTQSsy4xdB9Uq",
  "key21": "3j9ubUKPcyfhyE2Tvfc33v7uS7m6fNQ86TDghc1pnaXxfiArZtLLnhAjPXLGja6cd1dNFsgxNKqSxYgwKvhPWJed",
  "key22": "PXkCFndc52AbunRfi1zofaJart9gznFhoyc2r7jmVVD8d7wRGiYCapXWW5SjhvMoPn16csAnvNrrednRrZ91s6s",
  "key23": "3DAMUsVf8BJHDMvEst7sowUL1iWKLqZ9iv9ZcWgJ7QPm8NFfwBSD9bgHB35HvxPsLGRsify2HyBM2fsbPcVjfrvz",
  "key24": "5P4h2twnkC3d7Eh44tLL53XwDh5rCbVM2tKbSNsHQSGQDypCTYca8BfqMGzxnusFvPCvKygjauJeUfpU7Ws7s2d4",
  "key25": "wAgNoU1UcEtHcddJap7kwcia3V94xeuFkReBUmqN9UDcuWC48cEnxPYRjnKui2NXtJVDrr3isj81b8zTvxXBUhB",
  "key26": "2Uyk4eEAjPmnFZEbPk4ivMwwysGhwmCcR6XChz1wTHsUUbPtLxDtSVztjzYyWo2XxvbMYZ3UpfB7d9Sc3CCxbUjR",
  "key27": "4f3NmVGP8BcxMT3uUjvhJ3Zwcohw83G8YhSxGyKi9jhFHLd8vnvVVgQWxGA5B9P2g6CQ6q61X5TjSSPkdhEDypr7",
  "key28": "85M7uPcQ9LLwaf3JZp4uXzAbwKcrcVwsPWedhfELvAMEfCs8yKXfhMjSbuww71B7LpUnRecjnMGK6W16MQBzCcC",
  "key29": "4W4poi9KQf9Krsp97RBvPfKaA16upEKqhMkQM4WTCiGtZy4FBkPFr9XKxWySRV6xN1ytsGFkfZ8psYHwu3VenCAf",
  "key30": "xG7VHtFe3QMpDhtxAZmVrxhPiYzHA169CJWnoXYMrojReDGAJQH33xJxw2vzPWoHwxg3vrNLujEu4JvJRE3krFN",
  "key31": "3MN6oCpPqDfrDKzHGctR9oBFqEezYgRhkQ5cHe5WGzUDzciGiK6rFu6SiatrJGDzjD5TDMxxSZNU4Cm1W9mLARYH",
  "key32": "xiVo8bqU9M5VATKmEotFUtfZyfQGHX3P2EsTUDZzkdLGge9dCU9uJZaUiGGAw4md5Coasb9F2MQR3b73h59XXu1",
  "key33": "3P2WTwUWaqaT9SCnLomg5PwSms3L1UC5jAPcQdeMxJ5xLDcdNSr41HUCLmhEFiG3qp8TZ6WbpWE25DS6nY3jGwSv",
  "key34": "5pSgp4R1CrTyk7PMStUTgpuBpfYdNWq9kTxJD6vTY5kAcGAxRqKYJbEtaqX8EBwAPEL78PzbFCTbu97GNnTQ2RFx",
  "key35": "2Uqxo6EDMCCVvHzUCys2zNZagVrAzRRvEsvBvfPEj5JRRsoLQKY2rApJ1Nne2GcdwQ39xMxhvUvWsH96Zx62pTG7",
  "key36": "3J6XiCKk3BbnkTZzHzaxcRNr74m3Rgtfqvn5XW12ThbBt6h8DP524g2tkxYvQ7J7f4uJ6WdKW1rVFMpsAVZQtuDh",
  "key37": "Lju8RKWDDrXgpKA1oAV8WJA5Lj2pcoivBUXstmctAwDDu5AVKa63aCgSCauGWwb3pvPMP5sf65qFL5tXm7V6DVw",
  "key38": "pbPxtWE1snFhEC74sG9HJajaafZqnYwSSVNTZetTbDwHN6UhJ347htsMjtvFsksXiuCkmfwhiXMH37CqxzMc7Xz",
  "key39": "2bnNbv8mmTUGk6Re5nRtbU4mPSJP7KzrXkns5oQzTNTZNzkEEG7ryJ5fddRHkfmDAa7g2XvRCt5LBA2V9hKZ7UJp",
  "key40": "4hGDaAboFv14TosDpJzu7Wp3nkYGdMsTyxSxos3ZGVeLRy8PSpT5eh4hYD8XJw8KtXvyp6FxPURqdgRBPNwMQCFH",
  "key41": "4rKpGLkxxyLcEL38q2od3qrgVpgm9123M2f6eYhNDNxTfcSBx7cmCBHfwf7kbHzKjuGh5ySfAak9KyefTF3mDjfJ",
  "key42": "CrPrSuDuaTwDLvzjUpW9qe2eApbvLK9NrfAfHRUjbgi5mn2CNVti9M5QtFAYcbztmP2nphrDmNubzbttepvtkgV",
  "key43": "2GkRZRT7AmFd64eV7Hk7pa6WMa4o5fNjMayNyGyrmtSGPY4ZXnTFBY5S1jEugRzAbTrw7VVnX9DaNcxDWmYL36J9"
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
