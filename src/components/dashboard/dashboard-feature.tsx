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
    "5cnLf5ZyPTQ1v3KcmcPuFveX23UiLJ4i1pHH2HiELiv1tjSqDpyi9PTcasSjDiYekBep9YiBBPXKF7VjSKmH1D98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmNyGqcjzUe4QtmvJNyNWrs9F5yTQfuNT13FRt6ewjuxrnKrGYYiFLo8QmDmdMePdo4Qp2tPns81kZUFAg5GTQx",
  "key1": "55PGw5A2EBZXZFke4g8wqxQCRrdrjBn2auMzUDEM9mKvRNvNACr3VDbmp2Sk2Zfp54pGBsconkKyLSPatiicBqYJ",
  "key2": "57L55YD7LaisTa5mv5cAnrHbTxcrboT7VAVPLqKxxri3pHhZvHXTcT2tWAUym2cR8YncmDXQf9Pyv7fwYif5U32V",
  "key3": "63phaM6NuQmU9Wbu7kL9YCLjYNH8uUekK4bcbwzrYfAkMyMkovGhfxhLAX3AeKfDVP7T265jqJCgikWNcG1Ze7yV",
  "key4": "516Tcdp6RoRfoPAjkg1LSpagx4ttJsTEuZYfa83157u9PTJP9sdYB66x7T1CCKwHJgchZdB55JFSX7EnWMbwZXqs",
  "key5": "4hqp4MyouEDpiHCSPZkaxZZzdZU8tYkkMZc72ANrRANZGAZNRAzriE27dBJ9Kz9Cm9MXze6Cq3wbhPVwdRp9xaf4",
  "key6": "5MYb5vcjejFjXhXwn7cuWui4avJXcZRTTjDVK4D59F2oLB8kT2QMGLA9RWoztUDB2itEuHHLXK6pXbMpDtZEE5im",
  "key7": "3osNFbWxjRx7UCuurPAwgKogG92iUZgr9VB3Jbb4bKa2cF8R8VL5DUppu7F2GD6PKatEL7WeaPwYgkBqHFcn2xtX",
  "key8": "36e5GtgYdNDjxgP39prVcroa4PV6dAuNaGyoDsMzqGZ9BbMHRmrNiS1VetW1iK77EHhGXdRjVtfSN8yTt4WK8WHS",
  "key9": "3BPbGFR7DLTtncG9EbrXjtqhA88fNDWh1RQwkTeaJw9qPHGQa3h9FaLUMV4sTZzi2EEVKkZPDdQh2dsTHR3iyTHk",
  "key10": "3xnGGWXgQt4iPW625M2HJtJiSKJTkDcCveCJYYkAxq8j7bFkPU42pfTr6LUe3XibzdY9guwHV85fmBa9xzHbwu88",
  "key11": "kHJw66A4d93v6jTjgRavosx2s8qH7pk9dEZqm4tKoAcU8EDaBA6snJLkMGuXAJtkr1o4MneDXRoQyEuFbpmZDSA",
  "key12": "5fUJwsURYTECXqKyj9jsVd7gmJc6ccCQDCjq16iq2j3wDc9usN3LX8bztk9dr6FpPYCyLXQuNE6UBL91qS4RHugd",
  "key13": "5hMBdrsfKVsATvEDfdT4pAXcGPNRYUHCb3H2JXmR3prqnUvvg9spqGgLZViqyPCek9o3zcXsh2i3GeWf6J29peWL",
  "key14": "2pHK77XdUQaaVMHBQ88gLcWCUETqLhhEFP3ELB4iY9yTVSVdbpEnvtM7Eqz3VTBkJbMzJ84DKPkWg2dVotoTGFjZ",
  "key15": "2PWAVsxQtuvLDM4WeQnX62uMzaw3kHQg5CF8N9VLH1hzWHqZoZUQzHToQ9dZ3ebvhPBG2XatGSx27wjDBQ75F4Qn",
  "key16": "TUUZoWHzMvG2GpFzwSmCG18FVBH7uHk1gxdUU2M38EsKLm3HMuwv7eq7RaAD2gwysFDn6xCScipHemRsDaTKVfX",
  "key17": "3Uxmm7SmLmtJHTRCaowNEesdaFgYiz9ZJcx1uvNgM1XciJKPafcueHFFXrZSLFvqLnZQoKTKup5wfSRZEjwwJrsN",
  "key18": "5bVv8bLTMeb8qgEMKtYJB1ZJdPqUmXF4jRbxHo4ypm6e1oDULggdJ7GtY9LzfCWxKpnwWgLu5WhzKUBfjRJ4yMt2",
  "key19": "4RRQjR5U7ujh5og7mPxgEWWGbu55L6GTfpXmMeircgiRMzHibhhEi2oRZmsbEGkFf2xRyCZQ5qggvGbheufYTzXJ",
  "key20": "sYtUV3edDVEZouoLBfqwJdh53969zkezYR1eaMRPpaHCMqXiCFuNrRY2eGEwK1ekG1cBVqt1mfFKu2E5CLWUCmc",
  "key21": "4X6taMcCRZqGGyKR8jDuXRtbY1UEzCYqTHgW5d4Nsx2YZn6dGKUhKzLpBZgccACth55yVkdWvus36f8zq27TjsmD",
  "key22": "3h5sAkUWQ8fsAFVxPXNBQ8hSJTXZkCxd5JqqbPH3EvtuH5JFA8GQuUEUBfR5zUFimFqqm5kj958okin5XN311cgM",
  "key23": "5KY6GoxyUZpth2jkBaVyR7KahcnU8SjoGp6XPFAQZiwNc8aaGViKLBAvZmJi6Bzv77hLrixjfMth2YPnprqgQQpp",
  "key24": "4mHrav6gQEPr3CkeemAsY4gfsGMRr513QSpviYrHErHnREcc9CXrHM5vvzHaHPpieQDFMEqWwUEGBVrSoaGBn2hX",
  "key25": "s7HYYJRnVgkV9hXGzd5GermHDj3jvHCKY6SeJVnTQbhHpz4NEZasAPrwe5oDJvi2XdJqa7oMK4DMYFuofiQKRgG",
  "key26": "4jszBGuPeB63KEaKLr1vv8QJdXFDbWUxkrMbeZmyb9LZWWdR3Y2DUCHUR35QnfiLGFCRs1E1CMaN9njunZX2xqCR",
  "key27": "3y2Z5UvHusMxbP7nixjwVbgDXAETTCaRso4xV4Q2m5UnaRG4oVcQp3k3j4nRmhYZa5QCAQe9FBvTb2A9XvmRn5ih",
  "key28": "5hThAbSKuoTX7Rzmmm1shuYDUR6vxBfoRwEYdcCvuRAsjevoMfq4NenyTYJMi6b96f3Tu7m4JyZwNKnxfwVBQAra",
  "key29": "62jAsDoHG6222zBtyQMC2vBbS4cweMe8TnZDUEkydSXaZxLQv3NuJCxLQo7Q8CmrnuVjKpmubfUK71VxXpdR4r3c",
  "key30": "2t1yTYKjKTKX6nc3mqQ7Kaog6spYE7is4tqUHc96p7u5AZacKNXygWhZfQ6uf71aP2zsPZHJe26WYcVe7BQDdf9K",
  "key31": "3MAs8A99DEg7UgnjqRrrH6kXxaAS7rxp1naCT4HGg2Cb1y6FQf6fTXAs6Rw9hytCu4gNRVwG7sfwKWd382VRgou9",
  "key32": "23oyFjjd8jW5ihVAQVJvpjTFxgzaLHoHT97DeQ4PfmkiXbrNmkUnDc24zAGjdZHLBVefEbNr4dbjTM73H8TBmhLQ",
  "key33": "5cDeDuVRjc9dpDWKncffwKnpXTBbGxqT57uiCtig4Gki8oVsFGCkmMUyGF3811hmisoDkhHmMPdMrrB35HXWoWbC",
  "key34": "3f392STL1ggv9uL3UkUwXqqTpeSvfXVnJngr7fuJSQx1pAKnoJnWFC7qQQqsNocQ8REmuaF8DYjfCqGg8KZsDkpz",
  "key35": "C1fX72M54bBqPpp3u6QshgMAhXUGahq6d5LL9jGgJFtx5KBRp1uWzfxESQSpuVG6EGigs2pohThKJqgabVeSUrW",
  "key36": "5J5kVkUxr86noXSPsWbMuQnWMVr2xCrgVErMgih7cAwTvWvt3iDLKZQLQv77fnLPMKdAzyB6EhfwoHCczytLoqy2",
  "key37": "5h5b94jscRgSGkXdRJB6UvQDA8jtUXbZDV3ZNDaPjmmNyVwcwBLLnX7KLpemtDjsbZkvViXf4u25Wyx31Loswhju",
  "key38": "4UDPGNkTcHW4C93HxfNCLeGKzPYAkDr8d2MAvx2cnJXsQcBMw7EdHXV9pqsUi1wESeXwk2weP2ANkq24ZsqVVpKq",
  "key39": "2A3LuBAe4CL1bnASfN4E68JvnE9yygDYDgpDSQtFXngi8dwRBPhcZ1fYswDCL1xN3fk9y4tUxtb3nMKQeR3R9zo9",
  "key40": "AE7s2zECN2rsP1ZWcAHtL7bJmNZfUYhs92WrH58JqDC5cbBNGDt92GLGYiCKh3qEk9zPpCVQFzctQmSBEncrGqL",
  "key41": "5UkjCYFEGJRkutxGpzrgk2tm1AGYLeY677ZJUhx16qPdm6M4yQMk7SRgCL7LX4PhGGwJ2ywKyBSUk7YnQq3kgDeR"
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
