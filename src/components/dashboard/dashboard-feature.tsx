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
    "55wwssDGDwk9A6N4YbaEXr2FErjzMiDwyDhKAryMWNPY98257WEmv3zHJRXyB7FAXxUDChB7WDoreUYAbawo2xTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cd8c63WqQPn6Yr8BcmJ6ZiAtZZHL4k8gZMsFse2YWWaG6dBZALkRCqS58uJxNLD5f35eJMRKWL8QMS3cyxf2WH9",
  "key1": "3m1HqyDarUH5nt6uB26oetjNZYcojBU6B3Lnpo6R4BFKYMv31vJ7dtwNVnfwAXvcLniffq5RNVdpA9PbTBBAAYHR",
  "key2": "2J4eQry6W79p7Jx6Vb2r3C7dfwPvnGem3WTCXq9qCvPL659SnsLBsccVFR8RZyudrdWzN5TPfGK47xCwJM4KfSdS",
  "key3": "4Hu58NLLW7cbBmR1MFXZoPqsvr5pCXsXbmaFQUncgoNCc5YoW5AZZ1TXCxLRLZkeKZHhCZxwQa1rhxu8zN3WiXF2",
  "key4": "UF6XkTfYhtKDvMBapwwur6DZ3Lf2CZQj2rt8VW2d6tTYFQ95MFrpYMpHG7xrMZa3GUMD6K1DtvTQRtwPZoG3DkA",
  "key5": "2ic6LVKSixnmQ9uZp5gaA721F4kr511u6d5nPYhQkgjxE4EonKRUZE1zt8DwuZpi2kL4PT5RH8g6CZD9Bj6U1sje",
  "key6": "34WFNvsYU67jpQs7a13MypJ1MaKwStYVGg7ntZWiHEgKLo8c81aiW6nAYYMKLGqz5t8MHimFCEyUJ1nFx14R3wYn",
  "key7": "5Lt7wHNZwT6RQRevtsQx4YuaPHGDCmDHLYDXZP7Y9782zKAdUHBB22FnPBwLVbhFqwUmMUzBwSoWJitLSBaFerVS",
  "key8": "5RJArMnnpUkiJyJF116KUo4xvLYJtgqwHrQU6dRGWavREbtCz1cF9sdRBLZdpGqwyqT718Kg357Vn972mVTYUuan",
  "key9": "3iahQZKNfP5qZ6hEMuBBk6dqGKjta8HrJpxCqppmv1ckaqsrxHVvX5ijPfEHjthTA1ofAKydmKcnYwY6hVc9qwEX",
  "key10": "488Y2VyNFURxuo4ELPwowRUZ2ZTmSoVhptstTYbGv7C8cyc7eiQ7nebbjdvXiiZYqnS5YH1RKvg5rycbS3d3kpV5",
  "key11": "5aFP6haLydh4HDQY6AfsURrNeWpChEZxp5dyGLcCZjBjcLRswo2mcxaQrKLAwDBgyqGVPAP6UnrNFWxQGLFKRzXC",
  "key12": "39818nRFFGTMCSU5FLg87zBF1BkGAcEBjyzG7VgTCtpqa8m9CM4VuA4SqsmU559d1m7bf2Mnrmv6m5Cq766a1JDC",
  "key13": "4fU73B68pLDy7kVAkteukMLqvAki6GWUqMHer5QhAGrodP2E9wubBu6tMitaUDJs2L7VuHjmp98yqWSZYuLXmDxC",
  "key14": "5adk5eMqX8YgQzJ36t9giSzcmXWsrEZFTAN36B4EmZ5NrxzQSWfpuKqCyFcM1Ki4NBY1KZZkqsEq85tducLzzoHV",
  "key15": "3fwYFuPdPuJaWhaep6WyoPHuVsY9QPsLGeSy7Qws1zwPt4N6Y5Ve9nQ688GtUHL4dzcFxhykREMrKDPVPm6PtJjx",
  "key16": "5QaHp2UL7L1L7xpNxNjhUsB7AyjL9m7mmX2YwRGsVh5HdXKxCuiQVTaUaReyShgBtM4zznv5oC2rLpBaaFX6kxUi",
  "key17": "58HR2rsLdzT7KboecEhBFd7pWjaUQwFHithVFPDaK1mrfuM8YzH2xVoGJqi7J5uUhkmsGYsmDoNg9ec9t2DSC3QL",
  "key18": "2qgeNt6ZqZaznmkE6xvgyz3RyWEnipyhJCwAx1YoxFfCxJty933wHCTe6sAoxxjbs5hY97LKey9joDxMjFHfAy2R",
  "key19": "2hEhFmoBVG4MqKQBdySZHv5Nwudtvqe5Eesr9NsUCnY1Zhfriq3CshS3qzMDZ9dqQRhLkvzhCWzCCVPbcAwedfuM",
  "key20": "2NaoqqoWJGcnj12DMbHmn7BXiejEj7AmALeSKDswwRVR6jn133TTx3F8T76uxLuSot64h5JeuABRH72h5gYWMM9b",
  "key21": "44dQh2TNvRLDz82pqhrKXDWfUivSx7k9T2HAoz9KK83WjzzSENnkwcQeMvtKF8JFe9eJEiD64y8KsneeT59w5E8j",
  "key22": "xcrx9mrYHxFFJZVxrC3aSyt5r5Kq3VHzQjiRq2s3JitH1uxhtXLvL8LAyvjmVDiVRBKoZAXKm9t4EQQY4Xsgy99",
  "key23": "67HBstQDX63rw767kLuCrbsNhQpfPaWy1dizZ8gGf9mEZqbswwotp67JMpntE6nnukTtQib1c73pFUE4VeAeyCNV",
  "key24": "DVE1zLDdAEj4AoDfoBB7j6Zw3FZcbUppwcbrjvULGuzkK23hWZDybLRjDCw9AEW6QAFgMAoWyEvTkhi9PiJnyQ1",
  "key25": "43d1edC5vYnrhx6Re3wR5hEdNmiCvwXXCDw6mEC2KwFMQyN1PrqCu3Z3WHnnUxoEKWbYUmZQ5Z6452kbJqHexy9Q",
  "key26": "3uPjD4kPwBSQuXsJ1GNyNKCWrj4jwdixcZtsdBcdzvkP1wkoN98Ex9un3JR3XxhaPA9RET6RyT1JTumNaWZYXPot",
  "key27": "2PumrzzErFSUV4FGrJ1DmWYxf8h8HekgpbFu4Gx4Wf253bPJQggfEvtrUNFyDy2AQyT17n4abHQvodhKjFwJuFGf",
  "key28": "542zDeDwhj5gr7Xsu2CzwW4EbzB6YcfgfNFZpsDyhAnVRHHUvsgHCbGprJzVudtZZSVQXrgD96wwFopfvowDaXhg",
  "key29": "3eNFrkrbiMQxttBisozUwL7mkB3FnY2hEKzC8HmfzdvxFBrAHucFb8ytAWaHSHqNx6mCRLsK5s9kEqvB7pHrh3ER",
  "key30": "5sDoWNQb6x4Fy5fXiwPCDLUpUHGwuRj9oTZg258T7o56rsZpnSvd6vY8pzSH7DBvYtfhKMLbxiz9M8iW5GTqQnaD"
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
