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
    "4Ze8LKvZvoK5bwVvsvJ9N5L8xCWQz2RKpNyF3ZKK2p7CYQxqnMhe68eoHvXXPMbJ83fd3XaSXRuvDR5e6Bncoux7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBhAboZ4JjgdCjgCRBiYjDYKmFT9yZSaswpnE7qJnkbV8UPVTJPVnuYVh55AjtkKpo7wtF7w5H6cgYuR11Psf8X",
  "key1": "4EJW8gGZLpTqfhn3bvb1biJ8fUWjaWiu82BDHBsBR6mvk9kwFVfL5as656LUMWRD3ZjWQo21DHds4ZHmnsn4zCNq",
  "key2": "5tuZqh2xiTFiuxCi7dc8RrrRo1HPB6uuBy4E1sNQAXTTejMRmfXKic5qiNrnDkRdc4GnGWKtbybuDgq2mLPFRbvN",
  "key3": "4FoB8Xd4aGhk7fRrwAU4RZswdiuu79becxvJ9oW7YqNGDFWP4HPHw7KVaPQHgsvYPPTrnwqDPE6U4yY53PXAoNJ2",
  "key4": "4r4fVFWRpo3xreev5ToC8gzPjeAYELRmgKqA162wz4ByDwsTsYgB2JtcgCF9N37QVsFprBSiY2ZfjXf6X7hULrqn",
  "key5": "4Xo44Unev9z6hXU4QqciKDXMNcBtnw6hQUiikJj9vimEW4WXbwQjKnq7nWq57vYn8YRpr6QuG1hGSCnY5GxhFV5Y",
  "key6": "4ksFAM9cZD8swyHpZH5zi3drVVYZ1VWVr7TYoLw5gFYA2wSnv4tynma8zA18pd8qwJseQPecamuErGyccYjfU5L1",
  "key7": "3hE8BFzFn8roAduJmrtm9M4o4JQXvyApcFuQp54jr2WjTAEzhCym6Y4DtM9Lu6Ekn4EAvRdykptN2KugqEa4PVgy",
  "key8": "cLCghHkJVqUKJE2x2vf3GBNGTtog242LsaSqXXvEKDDRZ5mqFHcSfWoHFYsW4jCYMyMSLc2TN1TxkavjtCPkwJU",
  "key9": "FF9WucHSGBq5N8YSaEjsFaHr6MmMFxtbvQPfL2oh4MLLMu3XYzPp2jmXsKjEFxdVEJ3ioEZ5SXnYDhysR4vv3n6",
  "key10": "3pzSFnP5XuA1HphUfpyfcZv4poQ6wgaCn3YAWN74zKzbjK1LBBMSiQrghytrJX9XXrChJAS8EAW8uTD9w4RiJySo",
  "key11": "3nZaNWhYioaWFprKx4d3iQJRWxX2xRcUnYLbHi6gcPXLKHEL1HctgDQLc7cx3Js12jsKD5R21yo5QPueBDzATDaV",
  "key12": "2xhNdYuFRbwgfWC8Aj8yHc9WZf34sjVD6m7oYvQt4m5XrjfTKqGHPxCpMs3Leaqih2jEmvS2BURdv1V3uEEZc9GK",
  "key13": "2qRbmTiY41TWp552zfo5enRv3GMzeF4xcrLSimAWcHqoXjr2E6EJi1bbs8yX2xyu4PY2d8uZCX614JAoUZDZDSpn",
  "key14": "3Zfrq3joZAcV8KaFWZeQFWH4k8yXVnT1ToAKFdyBEuHEKPzBfofcS8QB4DD5BSS7ELpKUSEy4ykK2UBJ33NsnybB",
  "key15": "43g9Tf9yRoZdCVYQieLQbmxyJfMCJcgrUwqYgqrgXNUKZKEVLc39yG3r3g4NzhGc6dHeB9ecJQCpbSHPq1nZsAoH",
  "key16": "2VaPEkYXinTVZC6nzKWbaBqVsHqvoXbNH44tgsRPNTV5LHcGk9fEmuSr9n1B9H9rwXALT4dwDbW3EE8uEgjZfxGB",
  "key17": "4oaCUthcib6Kvi9U74LTtBBhj3H7uwW6n44y1YTH3isMPZsFoDZn9fwoDXC7FqtUp3yePSFSYLv4TdrKdnbkvGD6",
  "key18": "2LJMR3Q7JP3VfxLWheNz2rZD3mKMQF6VaGeLDeLeGd5iWVjGEMe5SUw4BBzdENHKV6FW1edUCRD2B23w3s9XXAPx",
  "key19": "2Y6H5wAAVudyXUXRhPCNDHPbjjPo3Wt6xgRkn2ybzMHyu4LAMo92cWHZRTvW5tfNMoy1SvVMXFuk2J3nntg1fSvu",
  "key20": "4gf9Q4bEuuHm8oUi9Xy3Jw4Jz4CQg974dyzkdss5PPEXexCcBhbwVRaGYbEmcQAPRihYZY8MWKqxKXxCvpejYUQc",
  "key21": "3gWMibNMWm1FveQaDrmoiK2Mw6dvFMJ4feFNVJcfcxsMhaExVuKUA2VwgiN1bR4fVGqQh53cGhJLtHgUaPFkCuN4",
  "key22": "CX5zG166yjfp5rFNLBi1rk16mCihkeKdFJLTzrQajRFVsJtkHym3wAq9BryfnVrfinoKS3mjb8dCix2t9Szf6Me",
  "key23": "66okgLTxmKWJa25nvmYxxj743Ud4kKSy35u2N1iuGbajfFGMHDiruEcQLbZ73BU4oBeJ2xFc3Mri9YzpX7bCj7AA",
  "key24": "45He9xGyKz5Uz1tX2H6cQL3DCw37u642F7cgrvWBw48LqVVnMpFVq3wHgVnyMvNuee7bk6BAVpayiG23xPspDwZQ",
  "key25": "3dUzzhWMZDqM3whuaZ1XSR2Tg6EbyN9ZmwYs4dPP5UpT8cWY2gBvztbhanTrq8NpNTKpbj7DFpzeGkR94UWS7jpx",
  "key26": "33EBcN7WvLd4nx2uGAEgSESsaHgSaAdoTqyQH1aMuaXFdBAJny5vYAigDTPqYZjYGNe94ugma6FyBPehrFp4BA2L",
  "key27": "5HXCgSYuRCHUXSVk1qVzgEc6jeySfGK3zeV5y4CJbf16pR6UGyVpm4MUwNmwp5ER5tUpwkyspFLFCXMLQGp3xkk5",
  "key28": "yRBxExeN8jiitDyRGW9vpcLxo6rXrh5NQxNfxysRGAEaNggmDFGi8Defq2Q4i3oSS5poXrWfbVbQ4QtNZiCATQu",
  "key29": "2i4h8YA2qX1UUx7L6pdaF4ULx11Chx9kXfysuoUspjTW73wu9kqBDospUrrJknZe28xNWNvtCHVGACF6ej2SN4gD",
  "key30": "4QNGH947ELJF9kPWSXskL6hxTxKuR8TsYxDmiLRcey42Cqz2ovvEVMG6yaSxRh6xmkd29Tu2ctLWThWTMoBDW45c",
  "key31": "2hzNpAN7qC4zRFae5rU33C3hrVASLH5Pzg5Dt2vhwsccdeoYYScwqAW7hzBbBWStRiXQiiN46GNFE94Zr3SGe3HV",
  "key32": "5VBEk5kKMqAKGkVHqUA7w9BdRhzec4W7H6s8gtNk9SCbSWKgZuR6VNg5pCiY6Lc6BDsBPaHcPF2Xy67jP7WCDf6p",
  "key33": "4EJMcBjc2bSH3aefqZeEcLYuXaHW1e3jaGFzCXKdyFLWRN42z7RjrAJGXG8ui8KhGfwLqkxyZEZkCrXzRKoWqdma",
  "key34": "3CfhW8N9yguL7hnpEGvjRfufabahahF4t1Tzhp6hR6rquSPJyZULHacgpNih7hH6vLkYj7EUcWCtM6eyApe1KAJN"
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
