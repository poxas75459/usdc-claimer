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
    "3SMeag13JtFQQ9AnitoadPxat8dzoHyVPZSNwo3JQCTF9nG5NXRgRr6mCSetXdsyvc3pMcAon4qVweK6F77NfoGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HpN8jjE7Mdjf41dLTJ2LkpBE4ViJLyEmanaK3j4Kx8oqmRmxuHtyGBjbqkud7jAhzKpyt6ShamSzWkuNnaUKUXD",
  "key1": "4MQBvvdkMaqZ7DEZXGdpErRKVeGWny5rWT1e8EKjiimRD5rRuM8KHiEDp6K7eG1NRae3niPAJAE9BaoDLy96FwGL",
  "key2": "4WYnCshHF8mssP3poudesigLPzgSohrVkkmjvpcQKV8cpepznqTiuA8WvG5V7ZwTP2ipegwKuuLLeL7sfeRZGFMF",
  "key3": "3rgCFiWPgKav1sea8qPodnMzSSMFXXhk5ogu4pqHUijQLyDXFoHw9pfsBAPUcZhWf37WSj2UMS4WqUTQiBVTfvMK",
  "key4": "2YV6LYijNzCNXqw8u7iimNEBs5n5xeq7bmJHnp5fge7QgWd3a44Zvt3uFBm6BhEp8ZdSddTXgoJExXtdM68Z9xHV",
  "key5": "46eg2DQ1R6pUhtFxDcUWUvZ5WwPCWKL5SojBAyjDyiSA9UF1q4BqFM9at3KczQ8vntHrFQnn7YzTY3Uh4Z9Vg81B",
  "key6": "4gK6uQ6H5sBJ4qKaPQASLb2jsb7D89ZRAwQMWdKGW888Qkd2bkccbFh4ocUA7peiNgdwL91CCMaRUBCLza5f1JQD",
  "key7": "4ukXay75SJsWF3KWAoFfipEwCaD8j1VThS9yKBnaJHAUzaqTz85TiBGiJLVQHPvow55DEfUqScBR8nUEE8sd1Cpp",
  "key8": "YKHsottGHR8RqV5mCY5bskxeVz2GiAPTi1PedMcn9pNwNo1o6oK64G3n2puGZasBrjSQe4vxqmaKPrJUc47sfX3",
  "key9": "2nNazE69HUY4kGK7RJch3jxT47qcaYvzRXKg9eg1v76r4Z51gqr7Qm6arcBvKSaNAxh1VT58bq3yn4u7okqjLQ4Q",
  "key10": "3ZViso7yYACFJzKLqNiPvqMcvaZrZAZErsMwLCFegjZFZjGxmUUKtANRNf8ToMDY4mjuEMgjtH6bADJZNrpxzhxi",
  "key11": "4dp1dtKLS9rUBG7EzyJxQmYRNzZk2JUwwqj4Wm7bqfdRT7kqshinsdmkM2t26EyNC7nFoLF89RvLq22ZrVWkHmh2",
  "key12": "JWk8Ut1nxLaeMmJHjauj2uRxcG1QHbpiYWadmU29GBCqVuPE4XMkjihsAVT9rvbp19vAjFHG4GLZprFqUxoT1wG",
  "key13": "3NbPqKqJ5FXAv3xzXy4YZJyEJdx9vhpWPuMSBXXgrW9hvLvHgteBozjGWVC2ZqMyXkwbQwYfmuxSJJw7jSm3xo1e",
  "key14": "hv7nUBmNJmwvogXgb4xQN6v7panBJT6dCwYP7rXMPAL1Yz3m7ut6uE9xUWUDtzBeXrcNhctfDyAkbDiEC4m7e89",
  "key15": "2NwZomJUGhcf5zUXQC2j1SdGdAqDs8MrMZWZgfRAieKJxqhVKyTCi78hu8jbd65S73dsGoNyAvcNwVRpV64GCLwR",
  "key16": "2Cch4TMZ4pziUV1TnLgkHzFPFoah8QdNN2ai2rVkD7XNBoEYNADuFW98qUKxWKRpKjHUxedi94Zi6wt4UGgcWbT8",
  "key17": "2bgEffkxQDNtXVvSkTU3N51iBxCkdE3HW5Vm4PQwwGKzKqGZ5bGU3mURC9P1mLGr6WyCv62q8nVd5vcdy1U7mN7s",
  "key18": "5rxTntzjKPGetwMS3KeQzzXrGFAL2WY7Lae8dncnZJHhVQZf3BJmELrHVnjopF12sx1NSBvghy2HHLY1aT9Rsfdj",
  "key19": "2aP3daFQgYMSvobGnTKP45heMPFuCg8SEM2FvZXzH9vLGrMZhAwuYmf3Z9Krt6BZouwfC1sc3zgLSwFnAAmb3EyL",
  "key20": "4Kh6zuH3im6yW3xxzGxyf8prcHw5LwQHbLHzZ11nPTdfCVjNGkLeAccJXa5vHzer17bVWw4rdvVjaxbe4efgsFHi",
  "key21": "4Vacyxdde4PqecPwg5FgVKjqFZt1mHKwyaMviKeifUeiRVP2PiUjUT2eHTAYB9uYUXYVwxtfqxgc2GBZ9f7AfGsw",
  "key22": "5MwWWSq4UUZ5ieUc8R7LVDPgQWGiXAGR3aGPLYUbzuvYEzfvHLyemHtavujgZQQ2if2CyCPkMzRoJCRG6q6PcMEH",
  "key23": "3NhEykyoEWVVYnBgxCF8AuhKad21W7xfSgAEntvbSdNEQqk4KoN59z29prbkGBi6CnRZ2hws4fLSgFvU5LPMWPpp",
  "key24": "3YQm5cGkt1R3yGXEWByYDAwHUy1Dt3NyYPxBymw2CDeX1Evjs8Yz567PHQFsL5kABq93QiiSp7eqXVBJX7Up17wn",
  "key25": "4eabEvTXZZHWySWKe6i6XqpUkPhyRJ5mSngP1DNiQLEwCXWsHySZk9DCZWk8JT7ocaFRjbVnfJtMF2paDw5yzQoh",
  "key26": "5S1ZtED9qJboFiYQLi5pAqL785D3YtAeKPJyLsJAESBsN4Fpk2YRMvPqq3ea7KSCXP6tpCDdjT6uG1A8qXRyfCNq",
  "key27": "3pPKwVbJftGuKaupxRmMPUkwoXfANiTecxX9nkcphZzgnEtHrWktvsGfRosUm51GwZXgVVAMKpU1SuQicaAkePoz",
  "key28": "42MSWUdhPAWiwtUorFMYrRo1UxmxXi2oUk3fMZaEx7D3ggtMVfJ3De9oNFr4ihdeWfBzbf8D5xRhtqNqBQ7NpdKU",
  "key29": "5HZxa1F2yERcTh6QZFgXqiFr8WXVYzsdqq7qtyZ2848rS4Fk3am5nauRN2ia7gVX13LuwheYmZfQGBNgTHXBCkEa",
  "key30": "5Rxhp7f9prbADeJ2rebNzRoQaD3ZBTc3e1j1NxZLdprz4ghTJDc7UWZ9bNveopWWHFa4MPmN6EyKPEdCQpULdknr",
  "key31": "4myjn7h5xiNbqYg2vduBNTt8T9NNypdpRZzda3cvsWoKxCFMi3MBkrdd5D1BPSCKZpfbCG6A4qvTbLWmv5d2ZN5T",
  "key32": "32SGAHMJjr3AzJqWRgCL7LTbxcjX92unWsVoRsAjUW8HcEqKZ7diMFWRkodSSpvHzj6aF68mSV933Ucf4KFNAtUy",
  "key33": "5iRqawrnMHAWcFo3aKuYEgPgG3D7USogBiYA24Hb5kJgyoxAU3bEvKBVui61cy21RDFQ8LebSy4Bnubo2EYhFWQr",
  "key34": "646Mg23iuW5BeBqymn3VminuocucXnJjySn4tDm6RbQ16Pz36Mug7QaSxmkLWDQGdZbuWsfL7xjmvoEUkU6FEzFH",
  "key35": "22d3Me9rXrQ9NAN4QQaSmvruEjtFWq91xTCZkXecdDGSmzHLjDycqExBJGw9qnFasDwxAocAQinr2Aou1Ns3QGem",
  "key36": "ptVmqpz5bNXDZH1guSh5UWaanxdq6KYWUjeiUY1cAir8adJkq2sy8Gfg9n5EtEVrpQJMiPJiSnT9G3nuKiiAChj",
  "key37": "2H2HU3m4oReA3By9xJxquedPBZtnczgXEG1qncW8JNKz1nide6992gWAytGuNokeRAx8ygXydDyGcP5ji9kKY5do",
  "key38": "2EiRwCTFUZQUrv4HqpnVgFfPWSv9unySEUzEkK1gNYqACj8c1QmmNE4ZbH5FxZ4v2xpfwURp153YGHqbhVmztFnp",
  "key39": "3JxGXXXp7gaZ93wvmmkCEGsjYsvwx3dfuEYpxDha1wC3JjyLjLdyMNzWxVb7fsbJdgTJ6YdYqzNqYuxdwmVu6R2q",
  "key40": "3VuNq3iqatsGfpHchCCnQnFf5KSfwcrg151KSAW9HCKrEmWmuUGujmFNPoZRMJYmdiYScuFDqGRcQPTBTFzxhYf",
  "key41": "5Nkvbt3jMT3dvzNbBBgx8cymbLM42WmSH5G9tVUw3L5arS4WL5ysjLtdA95KSQxpRPfT1pFnq4eS1ATP5Y16VZYF",
  "key42": "2JV1QaDeQa25DKEFascx4UTqqDWUKwT5TQeyWPaGrZDsgxti2aVbz2KCVa3JVoc8KT1VvxvP32wCQfP1sZ9kX8Pa",
  "key43": "5i9wWPTD628GktCmELza9bJYRbiFQLzHmRCARwc8yxpby7V4EwkhLPSVjz6ExERNpstBGJqLKASHpzighGAkvduB",
  "key44": "jieAkV3gWvPnjjisxVRC1PiovZnMg3PgH4h3JSLL6USwPf6EDana69rwxde7DtCkULommLDM4CZtNdqrHAoifNt",
  "key45": "5buEhNxSURYAhDNVFdmXeeU8wDaLZ3J3GVSFzcKVHPev4bzLnCwRqyC4yX23SoDfi37QAYtNcq4HdcknjwaPeBat"
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
