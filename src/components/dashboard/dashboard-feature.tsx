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
    "hUD9ZFySdiBvfsdMTo6Xqi8rM8SSop9iBjQZRbGEXXYEx1crMhNgQTdPssyhRj55cTAhobei9TEvk7tZPU4vTvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkjViBYSVWWLuU6jxhGsWSRwVpc5c2kcjxLfQKN5aFFQqaSKSuBFWg4iAvot5eatXvAYwfKfzTCiTAS9EHTL6Fe",
  "key1": "5FYCRbFTFVstLTngU13JBTPTqKFSbBdXkfUCfiHEVGPon9voEgQtRw3Z8syPNJHYiNYXmuU7swKgeicYqdp9cNXY",
  "key2": "3mLSM8fAdUi2xukgRNU5qwerfPMeHg9CpPYCfMQfbQqFEj1466KKcdHDGg8Hypyoi3QoAUsdeGZ7hSNziDr4SHfa",
  "key3": "2zbwnGGWobehuAQ7Ju8xFMj86GK6PXcmDfhS378A8vrddGgsEEVgv25e2HjdstBBySLriuvokf1sdYDWb3sb7YTe",
  "key4": "2iRK5oQYL2P8JtQG6zuaJiGejW93vw8pDD8FGfxqN2aoeUPvTnzBPZ5ojMAkMHJdwFNj4yiwECoQXchAoNCN2u2W",
  "key5": "wXquqf3uWwTtgniAFDBmeYerm2nktdjzGGUDTXVmkqxSnMc1gaaa3wcREReTWRwxBFVSEYhBERtmhMQyMPBv99h",
  "key6": "3wT97qX9LeQ6e6XWJEDjgAdvD9W4byQE8orzYko6z6L2eHpTxbXQuNqJbgRzyvCuAxVZHowTAHPEqAJehPJD2jSH",
  "key7": "U6dnR5pUTnP65hANPsZnYUpv1Vk3yHnbhYBHfRFGmVWSeJgQaWQsnzJLUDnWCPmBPs9vt6AjLgrHhUQno1pMhex",
  "key8": "4Bx7ik8i2Js9XPL46F375JNU9qZ8tZHN9dmcVPKLGpzECtj3K3cvVokRcMZJnfKaXpP2DQ9SyReSUb5syk8tVZQM",
  "key9": "3Pfj9HCBWWfRER16243yfmtv3vqBWr1ecHC7Lg4stKsqAQ3AxWqALG4XMeJ7Qn6G4c8jjXatHZf1Z7znRA57uHEs",
  "key10": "N3X18PCrVk6T8jUgrXoBJEkyh63oMbfh8n1LL8XmC8NNWJCZ2YMhAig8JDmgksvorXgPmUS6GQxFCwBhyJvDA1R",
  "key11": "64ayJ2dNLsA5fNX2V4ofTt5oSJt25bBDVvcke1AxP3iMXLqQtWkrZLjLy8sgHUoLBpobaHjhppEPWccbD9e9nfPE",
  "key12": "5HeSnCG1xy89TYFRdzvrixUf7GzYKYm9S7FYGmNzgKQr2zsWQFnoL4NujJmFQuXDzRovyJEpRZTzA2Mcp93c6DMF",
  "key13": "37f7QRBiiDRQwgHViEYrYy3cTttV93HwbXSt1vgY1XEKhDsW7DrGrkhyx7S9Z9fV57td15cnXQMZsaK79mVTYkqG",
  "key14": "5F27EjQXF6qDNaJ23x42DHGgA8wQ6DnTWpVKgzxJy2Af9eRmy7xHUXtpWVoYnyKQNVCrRdJj8NptRj7h75KSQM6s",
  "key15": "q7qwCndPyvvFPAsYnGkjvpz61NaAUQNf52rTc15H58gvaMcT8bZryfJqYitjkRfVZscThTdbaBAtGAEz7JhJf7z",
  "key16": "4RvKSgd8MpKJgBENhTWBi3NN8rXfx9J8GKoJjkmAuNpkgGcbtAt3CQgryRwmcph8tYpYC2mvi6xm7vzriNP79PMX",
  "key17": "2kRHjbGpT5gusA4xg6sdNRuwepqwUP6x33NtLuTatrYaw2X6FtgL1zSqr38kBbjDsGPRLbMeYc7H8MDGi2NLqqtD",
  "key18": "38ufgkiUT2juNHyRG3SXPfgiqK11deEgrmt8d4j5Mkf8B9xgvTqvfEaojQ8jn2pj9aGBBBGUCh7XKwUXRJ3cxP7E",
  "key19": "2Gnd9TYQkpswwwt4XfRofprfsaebksXFPTbNZCdwhKDik61g3ztywHrbjdq6v4K8BEzSw6YPUVjouX75FCQySSUZ",
  "key20": "5Zq2dgt1qP3yFtFF2UwAczojuuyMLq9CzkTVaYyx4aGtfdKU47CM1FRyQ1wyewpNXGGe1Anx5xf2k2grCA91C38S",
  "key21": "4JTUuMzQK1VeQfgJBxgT3yUvuMa2AARNnSa8NekcAAPjSosJjvyzR9KhWJWMsXVEpYWfkuKbrc46mKNEZrmxXMku",
  "key22": "v2DQDLrF8BKdbD52MpX3EZiFUyzHhqjU6JiwJw4vKJNkJc2cxLzUCQcKkdmPDREwznXnTx3FEtdaqFR3CaNSPY5",
  "key23": "2VcVkECRoRJKdKTHfpExGVqqNpA2dn7bi79TrDRtRHsSymEnzCbuwk9sWn3r7Gzo3mxw4SQVNvHQp66vft6n1zQj",
  "key24": "4NULeD4Wnn6Y6tAo1Cgkt9avZXT4praG778ixqeqE8vmqAvHWemEZRDjJ6bwBGE4taX5DHB6aQSGtHf6QqTtxpCV",
  "key25": "4XsjaviUnj559Y3ftt7hNGD3Wij3NzEEbi2UctoEuWD9ztNwvtNCCkZKTtwex3rfBgymrRmzTyfdKdAwiiFp4E1V",
  "key26": "4UbTDW9vcBWbioJ4B56wLr2VF1APnrNZa4euMvfsjaBoswuvRZkc66zRX92CgFvtRrqVBY9jCkN8SKnH56HPPGCB",
  "key27": "2CGvQ9z489bNida6RNgx3xJuPiHuNfSyMDHVY8eac4wD575ADqhqGJK6NjCp76aqb13B3Z5NMYCZcPWPNUvPjoEh",
  "key28": "374qeu5yhFGG9hda5DAEHhBx3Muyk9FaPGptaXCMFy9Sdq5bfJznJnmPzjGZ1GcdJrNSYS6AoC6zaemUNnhYU4QD",
  "key29": "313a8sPmbmBDagZZNwz7VG7hwMPXf621ttpBGe7NrfKqALDmg4Qc4i1nSdmT47H6rr2yq3Hw859WEjp2Xo5btZx1",
  "key30": "5LJYqMoZ3ruhohgLMKDrTJVmAbr1QnpebvS8PRfqiAjhknkrT2RJRp5HFNUG6xfK428chpDxwXufaZpsSfZgURMJ",
  "key31": "5GoCrwU85Kyshi5GkqjB9g5QGYGaCRVgLuRDbTyNFW34iCqfBXF8CpQ17gdmcuP22SmWSYskFUFwE5B18mS2aZaE"
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
