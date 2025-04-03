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
    "2oSJiS9Yj4oZZzRqmCc7jwUn4D21yN32H1pbHq93E8nGn6mwn9KFYPWpXFYwp5dV4CZSiAxpSgSticN7e13B6vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVeAmTJV4LxYVsT2xwtvcBDeupcmJ3WUWvVkHtGDtcgBECKi1ZUxm28qfakX88e5MJnbS4d3Sh5FAT58G7wLxhx",
  "key1": "5gDbLESYFzqm6JdovfmuxHjWs6G2fsVmReHQMNGbdTAviGtRRLMcVmkvwGYkhhL1KdLjU41kSXcwBCwBr7DtDpQN",
  "key2": "4zZEoTszVcj2XuqDJo7S7E4nM6zdzYkYWNYxHNsXd7PskV4ZgJM3nKKscCMiFcZB3TaaSEyCmSzKasEpe6ioHbXF",
  "key3": "2Ak2nmH7ouMeUSJ6Umh5CtM1RXmJs5niRU2mBwMF3pGyo1pCqrzfR1CvdAU41N1A2Q1r12X29DJQV9ovigGmqUVq",
  "key4": "3rNVsfFkMBDgRLuRed7dJopNWKKN6cwma3Bd8EFF6covfRA4kKJrJrc6PsjNXRf4vQCHinzyjNUtZKNdiXxbA2tW",
  "key5": "2gncBbX4asGrtRe6x8SfYhsqjeFb4yw2XeijhziWsaRkP7AG4fvy1ibczZYZ2UfmEMATn9EB7nbyzivmE3GqWR5V",
  "key6": "4zRgwRh169jhUJjAz7ujwxDc8L54i2hTXcS4qm92jndNcqraJKVcGK1BmuGBLLGaFZe4vET2f5sqs5bAW6WoHXJU",
  "key7": "28PbM3VWhd1G1DtxxUC1cBumC4vh7JP5hEK498Rms6eoX9CNKqqNKDqZqr2fFnjLC3Wwon9GL3L7wsMLgaFfNmH2",
  "key8": "5a8EHGXNHPfo85e37Zqgcwti4iwximTbokok4DDEw4PXgqoVMqRTVGGfaHFusmw6Rd6krAYz7cWYwUeomUQRo6zf",
  "key9": "4XZ7M9VX1okwYwporvdRdNPizVUrYeRTs4gFykee5dPRDF8TC2AY1tRrKZ91BCvB2B83f9wFuxmPPecMpdRGFsyF",
  "key10": "5188LmZWHLFmUSsb1A8GJ4D297mURT3sy4VERuoxXFUUZsQoPLZg1JBPeZSLWjXHZKpStX9aYhfpFLwxt4TCtWkX",
  "key11": "2Z57hraKcBjDRtotnFr1ne1PaiVAMGVz9sici6JJQt7X3CfiGFaHtKvmey4MP2HAwXAW5erRXqQTLGLjyznTUuWn",
  "key12": "5oSQ6Dw3wHPfgaBuJWMT9WmMotxnpMhdfn78wm4CHyXtNTCC7igvXupevChbLrVmY1iZwGBaM74LQADgAAzuHeJR",
  "key13": "2HVbXx8Euzv2UyTcDcXvALW2EgCaLtg1DywYmi137vNyP98QSJfS4c67KG5WFAmkSCLSXFHKnseBcRqFrLgsNWcA",
  "key14": "4PDNuZbVQTSuM1U9jL18pmLgcdQmLaLrttPfavhTPztZtp472u7uwQyoTNFa1EdziPqdxUESzp3nR6rm45yTyzjX",
  "key15": "3yWoa2yJ3JQxMzYoxfjL6y28xcCd7Agc6oM8wAPMkVG4MjvoXpLRdzjj9VXch3zG7cm4ntRS3fnPxVmcjXgPh7sU",
  "key16": "2mqLjSAMrXHNWzgSWnBDkDqTyxM68FhVeWzgxE8JA1CETrjJQLrgRvG6AXBHafRRUquWoe3dLoP59vuFC3d71MTq",
  "key17": "2chsa8gVXLSs1NJSrNio9gX9MZdvePiEYdx2oT9LiKknMWeSu9YxBjnyhRiegg7ywDCtaVDbBkauwz1zXJioSF9Y",
  "key18": "2gGA7aejJKRG2DEcvTFaVi2ZBJQsYKozdACriFDTsugv2MjkR1TwRAdeK7N2669CGVGVLqCXPAEJNckATtA8uA6v",
  "key19": "2zyRT7CnEpXvVkCaa6MRZfjtp8WBQs3veHV1dfSGzzWdsbmNZL2iT6DPDfuCk6YAFQPyc4tGUx53nnXabEDhm6tZ",
  "key20": "2nkFHmAc6UyTqmmjXUgMRfCszV7zAxcNP5mrNf1vJF5wmnTcrwnCzVUw4G8Hr2J3mUTeXmscPAkYmXJNS267nURq",
  "key21": "ZrFeX1yZmME2RMppP5Krxc8DnpRsAq7veoE2whyYUQko9NFW3dB5Sk36wucSLbLYUpNwmjQuZSs4gfskr74T1DY",
  "key22": "5AjGDxwAfEHQ9udqFCqX735Es23PpKpDerZnhLzBA6MdnDjRf3MdVqAsksK8k2CWQ24xwTCBK8eB9bVSsZ4zWgkW",
  "key23": "2dRv6dyfCVWFUZz2bQmFjGmzmc6CbR9w1XRqMHvS9faEFEkvsPURwgJwxCTJyhsUZBC9kn8SypK4keJYkEx9AkvQ",
  "key24": "26ugxv663uKEYeiNexmSL9j2AFLAnNbFxYx68QQ9ZbCNiiys9mffCc72UEmH83EMSov38N4wioLsEqSudtZ2NzBT",
  "key25": "4TZ2gMUAxzxNRypFnw6gLoXGFrNaA6huhbf1zRfK5Kb5JVkRaPqghxyc6CxDdPonwmJXcMCennQ5p7rahAwtnZMV",
  "key26": "4qnYRjTKmJ9s85kAFFB5797S8hnkKFpjQszRjyzDHghFdeFjPuks1LHm2G2dHTrAakCsmnFEeWX8wdcYdi2mApf8",
  "key27": "ff5fekBBFCvBPHFkpkbaAcVQau32JvLgAqw6bJy8ZCVYyrLQoC7xts11ej1yyYh5aWXMZvkQvNeCgLg1VDg6qLC",
  "key28": "qYV3x25dV2CkiTRs3uJZZgBDmAY5AZuJygyoSz5Cgiq7KuDxyhdPwJkRkoUqHaRdshgrcm2chLk4GnaBqbgo1wM",
  "key29": "2vnfaoTY67ExDHVwuMUdfxKWLLYAEr3YdxmagLHX6rkrNMp7B2XHsE19PJ4jUrUcbtnEaJUVA4CAgQmeb34j1qNr",
  "key30": "4sSKe2GY12K6LsKGC8UJykD3BWnP7fzzdu26W5Wq9Ezrwu3i9W7YmWKnPBq6V3WdMuVpxd3vpyz9KvM1LbJaW83Q",
  "key31": "7WB5p4LzzfHgRDcq4uHzXoEbsCQsfioPJLiduCXPz7Wxvc33HA8pNvd1P3JB7ftVNKUaFQpG4V4B5fJQtAaiJXp",
  "key32": "gMUfD63t8Fp1JXzKkn2BsVTWTubVmPCzTgogm2U7DHYPxmKEY651J82UdWVTcbJ6t7pdcwpAEj8DTXDUVVPDzvG",
  "key33": "2Bf4RJJLWVEV4UcpCiTLCEVyU2DFD2K9vCuUDT2paAtPaq1WNie3wbq6vdexVezDeAMz6GXfMNmZCwMjX3EyPneV",
  "key34": "s94UVaGxczV9rYeNXgqhLLALK7AR1396ewnWa5a4tTx4Y68tbyCeYJwEJTW1hLYJ9rGWjLcTAsXcJgknoGzzLq4",
  "key35": "5gfukbvS3usFFFK3aXB1m6RrBFBgSJhE1AWghrJsdUY1doX96wiuGoSxptk2YX1oE8TeyG1za5fGbfGEHdPasnMT",
  "key36": "5hpvPwz3UUWEAk3VnuMqQAoEdptgV3to7kFeGd8JYfs2chwcC4wSbYoZuGDphwkpgChdNSu87YNqxBpcNJsjosUP",
  "key37": "3qdgnKA1aMM1icEWjbS5h63VWPRMhzNPrcVCjmFFNEZne5ti7Nc4VFHan6ATSXh1BcrtqMBF4mB3mGwpysgassAM",
  "key38": "41AjnmDSYAmyaYtkZVPhYfGcx7bD5n4wkp7Kno3zc16Yc4wuNGB7YECcFRwKD9qSUdu99AirZtQ25XN2qdbj4CMq",
  "key39": "4fE3m5m24wyW6Y7HYaG3aPoaAnrhG2xv8rzSemVB4Jx69YmxBKXCRx8KMuz947TJXWtaNS9WF47URYUKb3bf4dqW",
  "key40": "3gbJXTNmBGNpLwDESuHM6JzCC87MuRaHAXnjPqTR8jPYus2nGzbTBiwAJNrTEvJ4zxyQPtfbwCZRR2t8DMUtB91S",
  "key41": "5bs1xtHxMj1geDCy6sJF8aQq3WhDvH7mxiJemK9smYV6SLYDySz6GG7NyDr84dwqghoNa7wivRNJQuxx3naaahs7"
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
