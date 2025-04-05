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
    "4xLci3wvsGLH2oDTAZNFJ7iFu89Go8SBNc9nJxx6jZUfqvMnhKnUg8dyKcoY45huXYSaV9DoV93VWdV6u9dTn9iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gUf4rDy9ENz58r3wEtZBcBr7CCuy8Q8bjkN4sWAf1LZA9fokG7wQ15JPXC4ZQcXgfXXPDqvej6ftA2PFFEL8fDS",
  "key1": "LR9zBSo18nLUvXAT4FPCEsFHtVZM8wiUiT3m9TdFFj4QZ6JxcXAkp6roRGnDomp2x2e1W9osjBUj8dNvnyxgrYr",
  "key2": "5gzTXMuYhsPqFTT1QMdRTSbQAdpNAcv4dacY8EHibmVNYmnCoy4be7DzxaEhCnSQt7NJL9uSnYYH5WxbaBVnbC4T",
  "key3": "4hUW6sSR8uy3AbGC7q3kFKiwU3z3gWGpDcdJHBGoLa1BGQXeEn8bKCVfoHDujJwUuDeekLBRn6vjbtx3JG6HGcBF",
  "key4": "HMv3g9Lb5jLR7yPEMHhdXh7RXmFgK6mnuAyeDiy45T1aGJ6zccYksh613E14Tc9kEM3EviXFqpMiPMKKFa7UxNE",
  "key5": "4a28RissQm62hLpqWTbkieLRe8TbCe6iLWHrXDPna3KRNwrEuHFHcXHh5NNjkXjFmb9hDRybATY6YXC7TFgScvjN",
  "key6": "2ej5tRtRKoTnHbrnUz2gSMhYztiY6NXMx3Y6hi6hJD3iUf9rBeEfTS7Mtagzi1TVBfEZWS7R3eUN3mKpM3nC3Zv9",
  "key7": "4JaaHiUTrYA6ESnqzzCKyEpVghm11P7KGz6xDQeUDTqeoPCii6bFMYJyztCrU9nNRGgQd2GQF4mmnZGi9G8sRzW7",
  "key8": "YHMH3hSBUEadF2t9ghRBnWUjnt8E6isdsWivvXeBtaUAa5xhBPUU1YUwB1FLKoMLFbtTyHLXMeTHzqJjDKRWpDF",
  "key9": "3H3wgZMiziAxPou7nWSRKtxVG2A7YY5gtup7A7D5Kfg2MdkN6AhD4S1znjNYToWTY9RLp3aMJ65J8BSK1L2EvQyw",
  "key10": "2k4oJwUhXzzK5g5Vb1zpqNSBByULG47Z6iDA1pLsaw7wGTjVbqGJ1aUkdPX4XH24aV4r1NEYvf87oVobNVVNwgLR",
  "key11": "49UFQLoDQRpb8xcmrQqVKLPSPkoPaVGFyFiQPbVMj5QMnHvJEXfsDewz8UhTpii8zxBkwKNTBBCEvr7eBTAoK8zS",
  "key12": "5Ja1oNGT3f3VKFxTGFq6PN4kCGQmmEVkHgwr5joymKJRyJMwRs6GeYqxpsWgQGartvn8sYL3RzwBe8qp8mzD6nAN",
  "key13": "4fmzgBbhH21Y5iwqpDFB3VRfHXjyojLhFer1hF8eBdZf17YNqtjApxp57fdNhWshdkguF9um61CysNHisTTmCiFV",
  "key14": "4ubkufoAxHx7afCMcRwkpn1rEd71qUTpSqHJgtXCEdJi3DdghRS1ZoohRX8Bx7vD5juZuAaqwd7omDUuGqXXe9aE",
  "key15": "Gdp47wQP6JHsZt774AexKXSUcbUmdYVcX2FE511z2tQgcHQ8et1xCV6Apw6DoH6PHCeVG2rVdBM74QHMNW17HQt",
  "key16": "33yvjAP4pw1NbQ2JbAzgWMXoKbtTv287RoN6zxyupwYLjCxTf64KGK33NEtFPo7T39tMGs4w13gEGn3AwgqjrSdm",
  "key17": "4kZ5t5N6GKXfRVUhC8UHP8VfARyzQfEg3KYdi3jCmymA1naktbF4jc6V4iY8NmpZPFKe94pM7LY8yTFiFyUrNqCH",
  "key18": "Uvpdp5iEaQbdZWZKKtetM4d9TPVvQgN7hkJe3XU3MJm5v2LZEMFRgQPPdrtw5zWKQf8dGdiYzpw3eQSGC4SmSLG",
  "key19": "2d82SAcgJR21LHjjYhEBg78nsJtkCKuZsGaNitwusUsvusjgR8KinPJVKbyXgeTceGZ6hvSTzcgWWsPd5xhgZCje",
  "key20": "26CcJjEBdK9C59XaghWsqQ28VcTDGgr3htPev2MemZbcBZozR6YKDVYimgYW5SYcKDwgE2Amwa9ZhRW8UnhdnNPV",
  "key21": "5Yk3ZCz22DmRvgBd3jX7N9PE62Me59fCvELXFPHThf2UazVBuheFoWpiN5qks3g6DuKjyAGc4BUcmoPMWz4VJCxp",
  "key22": "3FBj9fa4ayfMiDhjtUbS2WRgeoq9kobSCnb1aabb4AxJXScguSGHKWb92qHJFDAmQ35WnQgFUkzmP2J7szP162SZ",
  "key23": "4ew1sJCYnEJoutNLtZfMRADxUN2FTbH65b2rGv8dZx6tJqTCYWVQKP6dpdHV1kgJjcBz71gbKPfNZP6Yuw1nWpwr",
  "key24": "2FaeowW88xF2KWSchBA1sHWXP6yBX5g7prNSnDqj65AD4nNQ5rbBaxEiaAT7bAcxe2ZykTzKMU1tZjjf2LYhPPwa",
  "key25": "5aaGCSxuPT4EAqNcV2NPvWBoKwRkxoMypzZxRa7ZCu2NLEk8fxGw12AxT7WaeLRrhBT36rerb5QJjtbE7WxQ8a9W",
  "key26": "53Wxj3UVdfXjoCWSuLERSiNYsh4UVqEP3NwWDEoys3AxGnpFF5mgzAzjvgFfxFVCxsBQ3qaQPk1XSNsWUyJ4fEEa",
  "key27": "3EMQmTQZVpt5qEJmvFE3WbRLjiVqynSty74ydbhiCTaxbz8rjp99AGmSCnmuqqsE2hkFTqABgDF6VQr61n8GGSJn",
  "key28": "3FATG9mYnnrMXWnjmzMzqpAHsJKs3NjbVfCG8XZjuFq2u5mZRAeNDFbVNMgh1KaKqjJCSVHgNA6kM1JDVL2oqMkR",
  "key29": "2hJXud3LypZSJummscyC8jmhrpSEeVSTmVJsGFTkcX7coV9JjzFKEHrFYvr3HDiHnUnY8YxRJZTe9cZx8zwpffpZ",
  "key30": "Woqdx8mddvzjRVoedA2nCXvPAfaS1snptsugt2NKJmnGXQHJZDNqwVZcegCZUYTZVCJyWTTVHc2J2ACmRKDt2sN",
  "key31": "5yZoDMRG55ed54JC4iivYVqJRXTcjmDHaoDUEpgJhjhfVhayJHZNzrWqgpreov8LHVB1Tvsua8pKKYx6kSF8rDav",
  "key32": "3o2eVeKMS63BRHrbYo3rdjskLW1gosW3JzdxyMGzffvo8zm6jtf93GnSLxh88Eb43RX8djJfAj4jL8EVeUCrWiQy",
  "key33": "5kanMJezfFFotyhtNjVe2QX3xJR8U1Y6t7W1wuxBSUq45GXpjsgjtRFkLiBDxssuVob76vw1g3dHaQo2LDuA1ay5",
  "key34": "5Mi4AkbqVZubyvnAtqEZ1CHMAXm79NusLUL8FmBKdA4yPAf92fpYvLaXvjrEhmGbQ546MAVQKWoM7CE45rwgg1PL"
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
