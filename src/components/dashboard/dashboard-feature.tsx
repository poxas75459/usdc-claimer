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
    "5tF9s1rf24QmCucqAtqHCh4hAc2aqkdcHsM12DzCUZoZW6UykV4DyCmGHeBb4NQhHypTL62VxQPEfmEyzsreQa48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LtCq5BenA9Lesqv7vgdZe3KbthBudqFMohis5vkuK4jm2kewnqXXbusnbyMKJvkxUKZaJ8JHoxuKnFyRjN29Laa",
  "key1": "SNw118Ng42bd6bpVbEHQZPTiEvpRJ4C3iYs723oLyH7EcXHNDqVXYyMHMrn36gqJaPuwK7hvpMHhxfbHhmjpfQn",
  "key2": "3F6PXMafAziogX4PFtD8RRbzRnrpvJzsQF1pMwtYAC21p5jR1zqPXDMhQcwjGzrHdFAyZbc7M9PXopkRsQniFDeh",
  "key3": "4NrV79NqzEwm8hTqnyCnUsRH9TPT75fMstP7KSnNbQ3e4ctQR6RyPFw2t3P53vUiLp7HbXYjP5t6JqyEoX58JqMk",
  "key4": "4M5Tdm7prdJr8VvFpDbFidg8LLByE8rrJU8yQzfZCtMpDrB7pF8M1hGQx6rjooSbgktXxpUHSUfDLpqtHLM32JBq",
  "key5": "CnAMVCt6TxuavbnKAqgvMFeFEb8uBGFrZrJEFoK5etqpJfGXu9n3G9tvwsNfZstot9FTnbfX1r5JdvJZeDRZWWz",
  "key6": "3gF1N6NgELuvnG8YMnbnHatZhVycLruiYkNY35utanWUP6UpWaMf5Zt1j8S9FDwjc39urYFLdAv5gpm3wCj9axYd",
  "key7": "4SxxTbkcKWaAP21Ni6fcC5ZeGvg69RcvPLe47S2LQZopiSHp5wKFaW7nodcQxyLZeDfnPaiHnjgCQwtFnaZPvSxi",
  "key8": "ba25ne9AKdc7NYqGdg3QYcsDM32pJbCzEPq2Ja9cFZBxzdx8mUAs37ZazHmHB3FieSsU82UdWJiU95KBCfUGdMi",
  "key9": "LmWB6h214h89ssKSbPqvMDJHKhHTmU4t5KgecAb9v2nUrPy7RbL98wK8Lp1sKa3V6ft8m8uBkaBDCzzE7UPFvPL",
  "key10": "3mKWAbv2F3sLaG2y1J39wFZL3Zdc3WRoNFnQYQBpBjbQfsuTtaZkYrw5KanRDeduqwFY6DLGnWjyUmJay4BzBJNo",
  "key11": "4iZfGF2kRoSjsECijRjNG4MAMWNZoee5N2DtJS4y9yBrqHk2vNSGUi1314GaW1P2aSaXcAvmMpKPLem3frEKt4FY",
  "key12": "5N3vemTzyyeytELtxmXxRoLBbWoRiAborSr59fs863xGHqRqj63yvMdXV2jAzRYGizQxWDhdFQNozy6WPLyF4o3G",
  "key13": "67Q7PefMvfemBS71v1QBBAZdVtSxsawMxURC2dadHG8j6VEvVLjYwK9CfpMCwFC2YyPhSE19qYSKsy3y11QxdjXd",
  "key14": "4HuczYUZTciScu3wNVPYqPY3YpUbW2hzH7K4kZh7BAC5wuo5JJ7aLJDPTVLa7B6UXbYxS8nEm8yfoEBa8ntyQbhg",
  "key15": "4Si238CVPar4tUA7zisBBcvu4odywFTMsheLHLGcDdcDUrjJfNZtnUwVGU25HVudWru4EVBEHqwz5xcbgmbbNEqh",
  "key16": "37fcQQLwGcbEhdwf9qfRBgeowhKJkRLrch5sNWoCUJvrPXstjwdTsVH6UZXMEnnZLCuYw8QaRTdZZu8jZSejmH4Y",
  "key17": "4jQxvgp7hdot39MEqrfZRXzN2LpzGEQcqkxaXFzeXXXNpXZwzWtBV6XF4CtxYVNJGpo8n44QtjWxoWwmspYwk4eP",
  "key18": "5Bm3R2m9ioQyFJqAnBLQ6kLswHJmpPQZREDHkB8dVY3Knfwjo8TFrMDA3JmsJ67of52cLzBDHUMfgzgJzbLHzqiy",
  "key19": "3PeNucuwUxJpZDnKtTeFjsr1rSzLayTSYKeEUvJBdpwh3p6KWXJhYPNWcyNpFx1kkrYszNY3vs4xyNq54ohaBfEm",
  "key20": "H1rRvikTqe4bDG8Z92tD65tDD5973J5GiPW7jHDbM7hiHFZ8rCYYHZtLRXChAYM1s6CVMpNQhohLwq2KGpWjEiD",
  "key21": "5EwZvq5sGVTjbes8buBKm4LiaekuXvrETz2m4aukh5co63cbEjNZEjmD2CapYHrfZid8yU11TrcpzY7qSSj5RWDd",
  "key22": "2fMEdQEovVjc6x28FArUxXozeogJYmM4UrasLdpU9TwGSbPR2LFAAYF3R5sEkCNePhCemCw44eUEk7dgt4UgULnP",
  "key23": "4fSA1bs4eJBhqVT4E1o497Vn84oMKuyHYqiHkJXXLAMDJw6w12bBn1eXQpPbJmcNAGTcKMJHjEgekYLzBvSb4t4Q",
  "key24": "3KaghHzHGyRrrV8zW9DSeGZ56cmf14SD5wpJZWNC24pivFqWRYz9P7pFibGMrhFkdu4FZvtutf3YaS8BuMj5Nksf",
  "key25": "4kxBR64MXpragsPS6VzYED66VQffQ3bq22yEW7SFjp3cvbDx5gnHCCkiR1txwMPpdnPXEkrirxCcg256ZnhmQJAC",
  "key26": "5gSNDrE4ceCSFS5sZu93D9Xzpsfg7kdgD4Pk6aGNhGzwd6W3SpxHn2cWWA6jAYKeHvvVszepTjVf4WFyrPvjcyWt",
  "key27": "pwbjrEent6LFYP2Js5d5yeMfDgFYnwkKAcvwbLGpiy32n828jLRm55yunWbdz2zYRhkrL8FBjUjWYZ4y3LE7sAr"
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
