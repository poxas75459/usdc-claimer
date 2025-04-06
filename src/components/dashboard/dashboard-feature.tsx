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
    "2GUZK34iw9GWjDPdyf8dyZPfKHEV7VQqQ5S8ZjfFxpn6bXh5rr6fXi2HTq412doFhseDGD7mUiaYvarBtD7pkhsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kc7UUxPWwvhWZpi62ANd9UFskuCjU8dmbJJFTZHnBXNkDajyLmYv5nPLHjwk6zHTUcUxB37gqbZvNVkr2kMmQYs",
  "key1": "58M2cVLcoEmFV7V7n6we87HKL2h9WrgW8j61Wa6xrjxcxTzPKt9C7rbdwe3x1hWJL1DW7kzBAs4NqPWtcdeWrnkE",
  "key2": "3ZwTPJ1hQo4P67cDQmHbtzRmHQJ4y7XxMXgi5ZqVed55vGeCQAHEsGHBR8sQKYu44XnQBEM88N2j1xcAhSrK17Ru",
  "key3": "24nu7x1dUW5J2H9xPzNyBRcSr6FAenGZVDnyoMfHnjJ6eEDvH4wCH7uxopxMRLxyFKN2MvcbpW4s7Zk3urvVNqsE",
  "key4": "pcBpeQfoHMpDiY8u4xPgja9ksCzJdmnnLcDZK9tpy4JRhSbgS5kyfYxVAbnpcQWGL2uJPKaiVqbGi8x26ysc6v9",
  "key5": "4YghXs36LHXdGKxUryxQvEPDARn2nWLqwNAha2sRW6UT5xz9aAzbEm5pARakLy82awrUxDpd2HDe5wkYMcvPW2xH",
  "key6": "2rGGLAdiyLqHSRSx6GB8bFFDShAuEudwPdkRK5FR4CxD6bCJDWu9tm3io89XkaSZJyR51MvUbSJBezhZxYxkzAG",
  "key7": "aZrT6fHcpdAzmo2E57kWTUu9SwAqUWyUPqejGWRFNFTkJRsPCK3VybHYzhggQ2FGHFjQGvJ1QKMyXuJZTrUxJfo",
  "key8": "5484gwB1YPhf23JUxWk5yCwzJPohnCCbvuRnsBY9cTP8ZrPz4tA9sQuncWyKNwx8JUu9tzLYtjZyxWfRVis2VtmD",
  "key9": "5YgP1euof58kJgfE5yp2d5BdkALaNZF8R6RM2bgL4pDijxtE4Z7dqQ18NdPKCajUfn93c8ZrRodvArqzDGZuVgr1",
  "key10": "3JfpvJi5qXNLwgxvhnrmbEaEcrBi3cwEtWVe7DEzX7pi4bE5EApV7sH8kSwndCM2i9iLwJCCXio88bdeHHAy9yVP",
  "key11": "461Ljj7yJkNgPCSPdm11StDWxZqG4QaZTGFRYCFySMjoCsgThc7UaVm52roRbUgRiMvQjjQqFobfXCQMoAYwAdvp",
  "key12": "4433tgqCd6TqcUorwA7jvtGVeGgZjMwdaf5afXoUVjJRb67dzydBZBUc4ow3S7UXLURB7pg2BrfQwK5TYMGSSK6S",
  "key13": "3VCr4DYcXxSpacGVJbgNoYboKU3MxQM17cFoxZg4bBTW8TnHd7hG3kkUnR9S71kA5dotMw5tNLye31KhwMUbpQD5",
  "key14": "4Xb2Eh8jRqAADfYwGsPfrgujz8qKtP4oTwmjrtCxXZcSRoMHsb21eot6Ukk4hNy8Y2usnU684eQeKomZibaN2VH3",
  "key15": "564hRrEnoNSGo8ob7wGciuMA4QTv5hU6PDjpSU9eQ48EUuK8WGnyMePAgnMjyedqsZ33eyDJ8HRnTgDR23UP8nPX",
  "key16": "6k7BGXgTpEEksKd2iTFgNwzRnKLihExPhkDsWMHhPszoeL1TUTcC3cHWTnjTgyDH21Z2jtkCBkg132GGfNxLA7v",
  "key17": "dHstvfSoovn5KnZtGj8DpNb2pWDwRaySmGf9KAn5zieExAgoCB9Eyb1LFXNZeLXRZvLugJ6iQN4hHetEd7drTLW",
  "key18": "53AsHxdjutQRMEQQWV7vcDDFkV4ra212MAcwimvqaWxbYtCNCAAve8vBbUG3bCZGZCVvqB2utMydnhL8h7PygzLd",
  "key19": "3uymd1zJxeVs2AMhr3W5WDhMgLsa5eMTjRfJfYX4kMSJXpJigwabZdSzzm6NhkJgVqpAC8RyuxtqVnvDHQjdYUhD",
  "key20": "3CUJArqsYUnTtAieFNJYxjaoPCbRukeyEse78oTrdVPmLdPq5MDo2icbFFF1iNzL7RfaxAmuPvc4tcqfmAvKYDVn",
  "key21": "4peURkwsaxw54wwzKobeuX4BKgQR1Sip4rW1xKG6ccpjfoR5dmgho7wGnYrVvT1zPSp5E4RJxVyZSmZ3AnxYKU4u",
  "key22": "3oSTFtdYn8Poc5cABqDgd6sE77PoEdvnH6nsk3mjPHvbhCztzedM5QwSqN9ZonyinnfSuGw5WEautCgvQQVySdUN",
  "key23": "3seL721iR3fNSomPmpHTku74BBe9o5cV4KKQ6xpWfrbprMFNJsnU763AqTTAi2GVA7QzA1dek9f7JcmGr3VvEEEP",
  "key24": "5TYoL9MQswWUAEWhkw11Bccak9TwSgeSwVHmWFyFgPMaAqD6tmGSEymeurmLg2BZyXFY7azLbeFEpg9ju4BySoFQ",
  "key25": "GJAQueuYHSiZwUKSc3WFE4iovRbD6vQhg9Pw7ho9Zdf1wTsjCRVqAkGFs9aQXgRKhu7PoEP7frzWuTPCh6YGczD",
  "key26": "2XCpQrHSSaRiVjYZF9BmkzccBfSf1ydFoERm7B4zbsyZtrVp325r2R9vaoWv22kZKr8Y9JFVDya5K9sfLo3dhoYZ",
  "key27": "4z5N1uxu38bEvbgzVn3TL6EeL7Ym9R64UX8SmDCyMbf9pkgTct7LRnUD5vJkjR6MEyaiQSJKWVYVVENE1GWFsVrF",
  "key28": "XiA6UT5ah17imS7HWcR79LWLF6TNokQsRib5sNM3nEqFtY2oYvZ3Ro5HUSCK4kPVPyVgDSRGaEFiZotXmJWrLV1",
  "key29": "63cpF2V9PusnZBmDrAgbcnz4ZcMaeDSr2FUu618uQqJSezHsHatSTxHEgwiXgzvPfhuqcb2GW12K831H2aBgatio",
  "key30": "5L4dhmtGSGuKhfEdxBGg373vR7Hzg6H2LGr5YGFKf5ZK4LozTAQH8A4T25hcC53AyK7Gu14GfsTZeqc464jmCi9g",
  "key31": "4Sxe4yVfrYiBfnUWopURyyRe1xCPtVG8PmSXVMFoxLarFi4q4RcMXhpgpQHnGEZivLHgv1kxkb3wpJGyQupqpgWW",
  "key32": "VyX91LscDMx1fpJ9xmVM1Pbcobp8uUH9Hk1UZZmqqZqZHYsmtoqXcyNCDehCfoWoEXTzgmjmHfWUmBgHka7oJ7Y",
  "key33": "MHy6SzsnR44js8u1feDuzz9Taugu8zjV1vREh6mUHWpnjxeNVXgH8RuLrFm7DA3jD9JKJmq2d8Erb2CNrbWiDvM",
  "key34": "hP3cTMJoGiSdaGS3FjH2yXKYue9HqVvs3Ven1U65vDukg91raSWzz29CEwGcMYQSG4vHrdPteEcVodR8qZsUDKa",
  "key35": "5FEDkH92PiUENjXdyGMGEsaeyD4UEZ4oPHY9rnfhAcoL1kDSEbYfYLcZKR9M8ubeAsvWx5uAZ589YuFTkdZ1DDSM",
  "key36": "5QrXceQuQ66vZB21cuodBxNjhBJdo6Rc3hYLUF9q9VJNT7ctpFCGPXJYFmWrpoXnrArNYsMKYfozNqWxKjoxvfnz",
  "key37": "5UoEmTKL3La1EU6134oSeE4JUVf6YCVWviKEp2p3cy4HXHL8omgxHdWxnwBUbQCZN8FmjbTG5BRKTqwnr3NZ8mB7",
  "key38": "2XjMtciqBJSydBohmRgeCpQ5bdWm1q1Di9ZoYP2UgaweFVoimkB8183YpES84kuBipagxoEDDTchZCniQBVV8SWB",
  "key39": "4uZZtXqNUbCiMUdyQXmTCKxgXdcVzzNaYoNJ2AiAzAEvFELgjE1up8YDCwkToG72oqogzUDVGVpH7QSxW5Wun3DE",
  "key40": "4aMEWno1oYuE8RPeK75mpf8uRdzawmHFctLDaK93TyVkiSfvAjc37Awak3Skc6nefyq48CLuV1WR1GEyLbLK5Y9N"
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
