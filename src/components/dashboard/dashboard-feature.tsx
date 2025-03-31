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
    "4oWerPrp6ACYCp7VKse3DRMDy1qLGnHDDjyjxCXM79zRnRFLEVbA83EPkzqdSrfsvtJWeGVuSMEUXh2udANeuMkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AmxjE4SbKHUFzt7f3TmDjaHyExqmw3hXX6Adi7LTdGeYCDbKXyYX4oKhdXjftgnJTjUXt6q5HCyuyszzFzueUak",
  "key1": "5JSYDoxDW6x34MNFjcJdj2RCJefqj1MhhWNdi1h4WgSgfW9uR49DFPWg89tXQ7hPfks64veVR6uzYTc9nrwAmqiR",
  "key2": "5wcxUKEVP11ohNajYJaKNBd3piRE7S3J5CQrsNaLEmPzByZjUWQFbUoSGeMmpHxG5dqNVYSCDcWgoJh8iFghzJad",
  "key3": "2tiYZdFgpWueua1NWJu7tLXh6U1A7Ziyh4EetYiEdgTa1bYVB9NKY9rk4DYHhYZKQyq7ZtGyKnXsVKBmbzHzowsd",
  "key4": "5a6TTKftg71LRf6Fu24ao6m8Dg7qcKJfL9vBfC3BuXbzPwmTD6DMW7Uqnd1UUWABjwcXzSRV55TKiFrjfjzczR1C",
  "key5": "3AxEEeJ6aMqs6P4xzpXRLexXRUBcNchab7hzsrBbk8xLWhaFf1GdpiER5BQXNAWsQH2JZ4X5x1gj3fzgSGw1bPAu",
  "key6": "2MFpKdx2nbSdaMH3ShcyDjYQ6UTfAKZrn9LwWr674YMs1xapL3Dpnr3doFqinEb43GwJtP1VgWCd8SLunnhP41vM",
  "key7": "PxiXad28d8UJwD3aTKuoZnPTo2hW5zcMXVpxSkc54VGkKArSmdtDRAbtd2UxEoQDTR2qY4ctyii5v6miUooUYyv",
  "key8": "4DtaUcctydoxeVxxbMqxQesp7jWk6ABgTmuGVwb5kRM27AVg2ejyHT8fYNPhDiyEqKVKFYkDP9kc4B5CzB4yipGe",
  "key9": "2RiN448u8E5h9szrSAu1M7nWCqVmv5pRRqZDMQca9V2sAQN2AS6D3EsUc1bfrdm3atgtqmYuQzecncXg576xo8PC",
  "key10": "4fsa5droRh43DpktHhcY8c53g41oHnA4nC2wRnZ2WQEffGdXxkM3xpZLY3qBca47X7s9gco4gvWu6X3DN2XEinq6",
  "key11": "4q1Ebf4z7wKJWFgb4stUYJ6KZmZmR5JmzEUD9AFsZzjjc27mhzsBc7rXxG9zUpwK5FaahzX882Au5QEn1qqk2qVL",
  "key12": "4w4vngSMeZNjjHwHvb2seW7Mj6793zrW5MDwAbuxSTAc8TPCn6oe4dFcpg1kF2t9ndEHbwpfWqvybRwn4JqE4uLu",
  "key13": "bHVxhCd4v8Qd4kBt8AebxebuszeLoB8ZoRGi81iVunZ5QTcPjS6sk6V3ZQeqPdABuVa29LDBtGNDSDKZbjZwxYa",
  "key14": "5bxBzXHKWVHj1HV1R89KCokD48UvoaeHRui9eMBQEBKjSQZN3BouUMWBfvjWTFJm2P17js8NNeLHZLUvhf13jSpX",
  "key15": "zi7T86Ph88fLGH2i3WZt5tyTjwEa4Fxx9DjB5mAzgQymxZQNqKVqkw5orR968Jx5NDuDMcprphgCH5YDGQYFzqn",
  "key16": "34yMNhCLC5Z9CDLRFfz696gNPqQHre6RwY4WKYHd1u79aWXY9k5u8hwpbNrPuRkENZZBuzznJJLB36ijdQEpqWQ1",
  "key17": "33nvzPPrDgGgKpDymnx4JT5dZYF9naZkvkQ3CRsKz8TAAhAk8g6z957BBmtFPiNXyZ7CEPx5vUy8bENutmhaTe6x",
  "key18": "5WmQ65Zs7FuiPoEZBefuTSKtg1UKCMVJAAxwRh6XG9DhjiaVqgskkEZFUp4PuAzinUWB1zh9ijnNed3dAJZN19yX",
  "key19": "4UamKeomSDMFDda1Tiy8JvDRY1hdXa61gU6T2UBKRrTiCJeWhfhd94ca65RBeqCVWv2XoBBmm6y2PYBMHzRLZmoN",
  "key20": "3Bxj88Rxp4YDxkshDp8BXB6JWXMF1z1VxLsw9ccJ6biUnBpiwVLE9CEwNpXuZjoCAF4ThxzL4dGoqctV4rn5sfvS",
  "key21": "3Yq8EUEY3TtRJ2MbMWSVLQ94JHYL1MdmVhLFpmcBECU2zpUCZgeLWxnBu7UdRHKmcLSzdH1xaPqtLh56NhMWW4C3",
  "key22": "VHFm19Q2Ezr6niEZq4KiBdkLPxrNK4gm8cpPJ6BuThAFBpoxDcHmkxbTjVM92mssdsbmQVd5tRX1os2uGseLh2B",
  "key23": "4fhFe7yFu2BLdgjAvwam9HsuG4CdLe2cJdnSmrBQTwhVrmktb9YEUpHMytQYEgR6e9YCDUUs2NYUJf8E9LxcaBno",
  "key24": "2iuMLmuwtyyg6HgR3vr2zEQKkyFcNkU2Xr3ARuRPHPmKqC5keHj7LDKvW8DBCqWAkX3vJeboJEUL7NetLAvpo6Nw",
  "key25": "3im9yE6Ga3df9yRZhFJ4bLYbJUVHR782F2y1ZaPKu9FPZsnd21gpG3cpGhck1erBH6RMYzk7UxdjWkQCh4z1wytR",
  "key26": "2uhKXQjpjLUNKAvTCB5fe6fvSjk9NNPCoEW8KigwMrEFeoPQiibXhN7psmW1pr8SFNpyZDQEceQfLAgZCCrq1Utz",
  "key27": "WnYoqFH7serVhNmrMBBVDbP16h9G6nQbxNgydKVewMatfXZz1ekCCLtqEeAtxYetJCKZaACREPfYhhT1KMpxJ2K",
  "key28": "4Gd2SKg26S2oSscwgAMEnrkL2BMp5rgBp9pbpx55Jg82nmSXTeaguYGHGhVda9H7mS2BCr4fCcuENtUmAfztDxyo",
  "key29": "5PBi2PTDeDW8UtzPFZDzc75Ee3Q4aAPjVYSpoqoSm7Yc3CKTbycHLd86fStymMeRqpQK1a7YBReZ4gVZZgvEJfMe",
  "key30": "3tfeahxxybhHLJdzap4U8GLeCE6yLsZMyqXNoM28C7uyvZonRH4N9nybBoKhAwjNAU7EYj9KXhLkCTQB967MGdfw",
  "key31": "5S4LSo4xbFP7yhRhPKL32iERSex37GDeZexiamxm4eoBcCJAZpnhybqny5Bu63LVUtqf5uDywdH2qGWYZe9h4xe4",
  "key32": "4A8cQMT5dxHsP63cRiVTuP1gpKLxWem2nDC9XPcqSCRRH2uQGuXuSzYR8uCNkfxPDCxRJVy7iwgHpaXTRCnafnfU",
  "key33": "BsfEJNqzx8RQUkiC9Yqdz7Y5zN7mXZnuUeMH9h2C2R6hNaSvqrAm8fo2NZzUx3bQTUvPthPjW8NEAvhsDX7Y72G",
  "key34": "4pJ3dzvqjMU21cjVgkmWAsGarCJso2Mmex2VrNQYUuRgZEQD5sbLehqHmn4aYQEYTkaVr2Ai9eYMhK9CP7neKwqo",
  "key35": "224rfAtjGHi3AaUevVDJFWB5jtQuCK3k7rixyvNyv18K7FGywNYuE6vqWrizoYtuTy5GS94q5hw4JyVtZinnMyB2",
  "key36": "4C3sekx8PEfNaGbjCHXn15CVdDp4NExrVSMpoir6iCmVoRFvRSjCtQWhNRY9frCmsPLTShbJhEnE92ZhJx526Q5x",
  "key37": "3VRvydyhuwbXzcVPib6F5awuWQPrU3yxa34yKUwALZsno3CAinjrmKvrCnmHG9436E6sNYm6xKGLeSCN1WEubwYA",
  "key38": "4RgJmMr4XCoSuCC6bnrH7Ry85SUMA1eUtwGSDUHtKoGK6Dbimv6eYmwGsZEbuYNU8X9VmkQvgXJUkDHZAQteuMB7",
  "key39": "5ddnZBSP1px1GdR7fQrzh8AtBHvvN6bPzU4951F4wmJ8whHzcr41V7G2B9eLFQq2LVfoH8X57LtR6sca15JM1pbq",
  "key40": "BfQA6yoQ5XTi4VkxrVcy7i7zNQn8JFC8pSR3Dw47yMnnRwEVyB6zcAPUMhsy3KDs4eTqSDyKiHhahqK3WPe9f2i",
  "key41": "5TmxKeBGdxZup8QLWeyrphq8bw7bgCJHHpbGzrKuigmEVVmjYP3XZ3GhweiHMgJ3dt7kptWfjNLPfbzFiwbafea2",
  "key42": "5YGhorZfiFoqWMCZefPUsiMPiKAMpDNZPdLAa6k5PvDuAdtX4WESzw7wFrPSSZmRj3VXxGSLc1yLSQ6ev8Bu8Y2j",
  "key43": "2axEPCKvbnHrDC4nsgwVjmQ8ryyXjhz3CFu2cVCvur9ZWwVuELQ9CDmEpq9A7pBH9i8ey88qgCfDNpcynRhWBGDT",
  "key44": "3Rp1jLQwtycgCSwfEPxCrUME7b2qJdBZC2R18mF8uamaqWc3uGQm89VvN6s8pZ3cXPghZ8XUpcoy9t24yFkjFTbs",
  "key45": "2hfUMwGDHNvo4QRGtsU6ZoMFNdiLUf4rzpwNsbHrNZv8hcFipi5AhB17afXAcKHooLTkUpwQMCJ7w5Xq8ns7ckgd"
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
