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
    "25kGx8htLeFe2ReE8n2LE3LeR1cZC8mbv8BpNakonAuRiw8VmiKixhiujS1f9k4HSrU6gBR2ngrDJEAD7tLtZh2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaNViCAKgCjuHnovALrNwWd1UPNsuJ4WAiwSm1K9xPYnw1zy5kpd9kf56zryLvXtUKAwDzLsUiLb5oSrYsAKQJT",
  "key1": "2oURW7LPrwNaULrqVKnv5Hs1ubksM1g8hqMJf4YaKhZp5kCA5KYJ4aTznHmrFQVug7uadAoc4VrnVoND5EcuqgPW",
  "key2": "bVkfQfyP5tXfnMQrjigHmWYcxGJBx6TFF2mjywdeyQHEvL9W6ttqiyxWyEovv4i3bL8uHy46s73pva2eUTBEj3m",
  "key3": "4rHQTMuCv9rzEYtHrm3n2jqjtoq1cQBQuhLjy9EMPVexFmke69Ym7Zfgy6euGbRRkS15LzD83mtyNfDr5WzngHCY",
  "key4": "3geVecTEDg4h3frbYfoytE87zfc9We2uv8SmsMFhX7VMsPkzatNAtbkjyUc3nsaPdg8H6Qj655Z2j7kitxwwHaNs",
  "key5": "VGq7f1LFb2gbHhV6vnjectF2npWAWNUNqZ9XewHeozqnEPnzibchcp6PYEPKgynYyfNwRXJ1iKBvqcQb741aRnm",
  "key6": "2XS1WLsLxqTckz6JMtjx5U3LnbmL4kiE5QSsYzpKodrNrVFhB7HZ9wato6Prw2BHddYZsULbpnSAPpFcVbSasK1G",
  "key7": "4YWDi51M9rsZLXwehSAf3z5g3kWughG6kKwUnzGHoeExFRKPgyUvqJ1AowwnBe7VEbJLMhY1UVQ12tRwqknSAJY6",
  "key8": "2crXaw5URnAJzeh8aiqFK4AzFGQN7woYsj1vsRpczncfigZtXcKacAic79oveWVv1seihfxuDwFALZ7AsN1zesdf",
  "key9": "5cXQQNBJgTjXQwFfZRYd6shdXN6YdjYWPasbmka2zzT2N2cSonP2DrLStpsk2rKN3ia6i2rHnooFxUxkLPduHbu",
  "key10": "5XWu7gmCa8gaWsorn2gjB3uSCEt4uAijZdgocD7JC6vB96D17y5BgaUWFELDAKnerYqDXpKwuDzoqJFHSK1i3U5n",
  "key11": "2SoRpFUv1tqisde4Rah2EZoMirZ699tA9MYHFaFJzQ98cspqCpcgJ3AUhg7VH4yACbuKbhuu7aJeHmh22sv89Rue",
  "key12": "5Kwtk1ZVdxSiiJUJ8QtH6UgHpzffyxBUYAic4NJVsvevsxK6usrBpR7xeZSnccsULbz8mFoZ5cYhbumjhdD2wvPd",
  "key13": "2Vi9HTbT9UzjGk1YCNxj9d6Co8T1j7TL3jJGaTpDT9XU449df1JL6qyGxtNkrpxSKydPpSEuVmBpn6o4H8SwG4CT",
  "key14": "4MrsWhUUU7E2CNvB2hY663uS9W7CzY7ZExPPyJNGwFwWi3JP8dXMGxZTNWfSYyd4meFSQmLPT49ywPFKh53dq4VZ",
  "key15": "3nDqmYXJydLAkxTLPX1U2NbJ6BkXixzpfaBXg6pMEbdqZhA6trk5WajMchVZPs5MifFxTjPcu3KZw3tnMrebSFse",
  "key16": "643PHSWPkPY67QDvdvmd3J7EbdV7VwmkC6Lwj3AnCKF7HHpJdKj8J6ouwLkv2hK3TnqquD4PnsFhH2h9KNQDQWaY",
  "key17": "4zKMFi2cYT2w5NgXLy5GQpx2KADJDw8tCJXnuQhSoXm4ZGybfGrSBzqbXs1DT1j7ogVRLqHVbPYQUVYMigpf8Hpk",
  "key18": "2HRS3sikfy3EZCY3Y2zLmHVDsmiprDouM2aejz9Z9py9EjwpXdQx18FGnoDuMgfRhRGiZ3WCuB5jK1G61GPMMRJg",
  "key19": "3HdEnSs4Y6BqQhNPZwLs3xQNALYSP5VYDhHcgQ4ZFdZqcAcodLytSpVkhozt97v6RbEhXeVDR17WZpfKxkiWQiui",
  "key20": "2LnBLVzbYDS4SrUuJoaStWMVmVW716tmvHM8kPhwcLmY94bDKSZcMwKStq5gcr4tpn4CSYjyDkVLkFvUJWwxzNJU",
  "key21": "2kuwZHf9XyybGWowfRtHqWtn4htq66A8XbFNLfgXY2CFb3ZLWVq9QQ8tHvqjeZeTsggBMcuGndn1TWrSUnLLsHxo",
  "key22": "4yafqBRPduRg1pc4AFYbqVA3Kh2CKEufYFLDhQZpkqLdEvRXnJbpnGVnJ8xQ79HHCYYfG2CvRfYmBBc9a4MiXxkT",
  "key23": "p3Pbpvkwo9VCqx6XbiRP2URRUMwm4BkkUDaPs4kEcZXN9TrQBU3aJHDUaXzqytnaYmaSbTCvWNVJUuHG21NmA1q",
  "key24": "41hG6EcwG1BFBgNw2J7ZY3LcMqzQ1n5SbA66HqaQ45hVK6S2QVv922pSt1jKhWWbLkvDHGX1U41KDX4H5amUGjMs",
  "key25": "h6umpFPM2F3RZyKnoQsjtxGZyd7Dv5HcMVL3UoU9U7orYPVNdHq6uhE8T3kFoMU3naQpykhNxCSaE9FDPUkMkGa",
  "key26": "GmDtgWpDayDUiXjoAnNc2MWCHwcAmUHCZabEK2DsvcGwihsEXXwhwXYDjb6Xhfuoe8r97vNe8kso6sGiNffn8qj",
  "key27": "3mBRV6tsH3CYUGRAnVcEJMV7NJVioBjDB4c77eLjbZZzN2spovkB25x8Wrub6Cg7kYjC4ErVwzn38JmtJ3abrXcB",
  "key28": "K25j3y82J13q5byVY61G9U2Vp33pNKEFk4Vg1BKaczaNoef9Vn9etyUGD25MctEXYhqsHiPWQ65eAiPi2kWbUhQ",
  "key29": "28hP15pvgfdE1KA7C87jwZAPDKmRj8LjoSYjd1v2XjwE2LkXkfAhHmkYA25YrvMCMSGHXJZuxAsWdBpERoBeUede"
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
