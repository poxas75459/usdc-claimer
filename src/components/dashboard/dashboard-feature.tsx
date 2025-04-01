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
    "dhzNbLYEwBrL99bKPRV8sCrAXfmqR9SqHavL6HXeTyuDAD3bWo1X3UkyNUpzx2jsaVCXzUiCgam8bNsH2poWCPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbD83s4TagDHYSWQySJPMsPgQQYUSMXh53S4oyctoJx6FeWZbuGpgutgEMjcPjUNUAxrV3ewUxV4cnJNJ1RjH3Y",
  "key1": "4iPE13vJ3dBbKyTAMUGtM23VjYuBxJYhCCMmYto1hWUtEpkL8ckQKyjKPnEqK7twwUf3ZPhDT1mEexUD7bVpirxv",
  "key2": "VbYVweYovv6GvxsfD4k6sAzjoaCuLG79LwGnci2ZDa3J1FRfbJB3s9QCEhyaQrFLEcHPbxPEnRCk4Lp4AEWBb2y",
  "key3": "BRRiB8M3pRvCfdtGodL7AGYMjveVBtMPbouA537xDvNo14gUotqvJ3ABf4qxNmf3KCEdkKAR7MsEgMYJxSrdhCz",
  "key4": "4CxVwUfmxYURnhTpTKB7J5WHpDDFEeqSD9PvccUmw4cX8qL6wVz2RL63GvkpZ49pzj2h9Dup287EzcdMPxQ228gg",
  "key5": "3Z7utQT5xtXJaJHdYaTWjwc3LzCAP4GtmkPjusriEJTzVjjeKUuUZC3ri7yHg1WiToLvG4962F7xfRgUGa111moK",
  "key6": "4i9DeEgdPKoSkK9pMfdM83mmqQ6RSaBc3sdEd1eAZKDCmznyz5qre4tcbeHGbX6QNpgFwccfhgXhyW4TVR6aJK3f",
  "key7": "5Ce1LNYk76H4ELtz7uk8jLMVwxVUKJ1iWPeAoEi5Lea7r3N84EhupwJNrWgcYhL1mPmN4dERP3vEp1p1kuZvuEUp",
  "key8": "5uiDHXrhfBDRTzq18Bq7x7ZukoCsnzQUtoQRQnG99nKfbBnKNtco7dSZr59TxZf4cXX7b3PsiekTh1QVh1pVzfiZ",
  "key9": "p2u9PjnbksvbMYDymu2bqcVdJGuxZ3D5Tt5VVT2GtByjGL7NVPMUP7siR3UcfPo7Q3PfTuCwaxH3rb6xFuDmY6g",
  "key10": "3uDxNxhFRaSAFqDghki9o5oUREFMkuzunY4XsEn5VqSW5mc1Eb9N2YXoipsWDQdKsdrKyCjf3qWoLU2bKESndgHR",
  "key11": "2VuZErmnugp7KAgALqgqFadDARRbyoo5QcKCxhGa72TyHXXiaCwNmUk4U63xHz7fsmoW2PgGj7aRiMWCyAiEVm6r",
  "key12": "3zGVhZ9GF4AU61Lx78snwEf2HvV282eQNed6jhWu5he5b5hkFB7pgctSpZfmMKSDt2EveJyvVhB9xgguvukY5trv",
  "key13": "3cnngN6cwFjdEH1izJZeJUV4gKENhSoUfN5B5j221G8RTqARYrrWXW9Y1gX1bu6PgVHPBo6oVk9jd7iLcXkE2EZS",
  "key14": "5WTJukETPAPYsfs6aVSwthFbEz5zAKJSBN9x5WKGK981T9vop2eZCgjJHhX9E5QUftNJfi6FAxHGffTPh1zE1XN3",
  "key15": "3R9Ci5XeH29YVg4yHoUyxFHEmb6LcyUxTDxn9bbgTDkpj4BxrCpcEXB8iGD6pmzSJs5bRMncjEX15wn2UAkiKiQd",
  "key16": "458teTZVd9JX2NXxxquAEqSCv2SzD9gzctyKB2j5B9LXzDJoXir38TRePLdndiaB2fm4SMnkwPLcsmjCECPusasG",
  "key17": "vC2t74qSm1S6rw3KiF1VzBbD26ULoph8AqPrXHoTmSANfMpJhuq3VkFYNuhttjfRUgQNzgTyrhPazso7BAVcSgN",
  "key18": "g1FBNFr5zQ2ubqTS8D34iejV3YRk7c4HZdu3ziJcfTgsz4oH8zKUc4Z51d271X2uJj1Pb1W3spzHyMi6UAYmPEJ",
  "key19": "3jMpdz7BaRcEFqYo5k9KztnPNPdiYnfVwUnURHJPwqywLxLhyL4XpUr4gvNHQQ1qWfKo7Puu8MZHjuvsPYsBana1",
  "key20": "4pi3b9n7ntPgoLstRykoVUVGta9vhwgGZbBcw2VMdCt66iPZ3hn7DHpHnZZe7U6i4NSDRCd1rQ3dfq5EpS44XfhV",
  "key21": "5ZVo4ukNj2oGXH9jfot7VVjkroKTT2WAE7BPz2wtqpggEzQEMfdNkinWbkCWtrMZs5KCrhGrQhbLAVErvw33Loqz",
  "key22": "2mJCUCayCMpBREm6o5weSCySUXc6NzRYjzPTNg4qoa4WoH98cmKexcR5nXHqesUBMuhnxEw2bAnnn1784EejuMHy",
  "key23": "8JWewJj5Ng67kAZSqe2dQP9iwAqRFfKumfaQohgVzzvCdE3LcXdzq49vhwtEj8RMvPn8V5bJvqcRVZi7T4fvugQ",
  "key24": "4Rih4TqYv1X7a9tfRdLTmMG5HCL7gLmuMM3QNqaXzS5h3PvhybGKo2NTgdCXAmiq8zXiLYw4igaMewUjhaa7aWQp",
  "key25": "22sas9M3w7h7V2964zX3KXGqstpQ5uS4H61trf6eikmJsqLreDwWgpE5P6HGoPvwzV6gtMx6WtzhuTnEXuSZKgjt",
  "key26": "4fRMKPnRht74UkL6kb62yAp9b2JP2yR42zZQ4H7rW7sa49YfstoMNrM8CtdECHsUQuLjs95B7ptYV2dTq2F3s9JM"
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
