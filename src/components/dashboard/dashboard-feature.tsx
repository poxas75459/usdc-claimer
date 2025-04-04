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
    "59vfLLGcFTxmeUGcDjHh7MYeSH3qHAeQP1dkeJEr7nXi1aNRqFPyuf7nrujuoLqq3AVbkNUyAtQzmxMQcnfBznde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ly5uAoVr6dM8bgJRYLrSTnpPo4hha9RXcR4HZE8FWWzsRLARn9sZr3tGkhm64mNR1Lazr7HpLD6ApHqELi44D7p",
  "key1": "XEBMR5qACBo5wTk6wxZmXKPAkyPmNN5fh43BXcDqJCjhiTYwkepvMoNFH6VRQkZbAEQHRVjkC2ocPSUbjrmUuX2",
  "key2": "2dfg9WQaAeCvwQFnNkdGM71LyKMeJGxr4HYGXMFTvD58ut4qixTxvCNu2Kx7y6NLQbtrqj597yN4YrnXEjDfKLam",
  "key3": "4Hu9WiaR6k61CagUjnG1JK8sYm7A36RGB32vLVA8k8w95dfBPm4gYQhrAXszYYrkxmEWh8ugLHWYP1Yd1sCnaAhj",
  "key4": "2x4RJYijJtwv7g5M3uZaFkcdDRKEnDUy79z6WufGnPaXJoGUHa2HuxEKmcM7sHhNYy5qK3pAhPCcCS9Ds1ETNLQA",
  "key5": "4MEx7BYHpt9bWn53z7a4Z8hcoCE4FUdr6SCEz5J8FcGneA13KjDscFzfrD8Jt7vSx6YFuicWunNif5DA8zV1vCzJ",
  "key6": "4yGCvJN1JKrQWqgrGk2HGRZRasFk4wVt5TeNjWEUK7fbzp7xUABYzdKHwCJnGzqcw7zcZouwiZe7gFFdZZZoaqSc",
  "key7": "4KoDuDmjheSuWTMmZWhnWN36xKPSVertJqoM5g4L9dHDDgAzz1Qfrtf4k1Gw5nq3873DYDHXVcv63G296TPH3Lr2",
  "key8": "3MED8KBqy5iZwSg9F6rZB5mwYMQdCjMbQ4z6KQz4q9Cm6XbsxoSShTE5KVhhxpfQpRaMfFwEUJaeR3H8f55ECo4S",
  "key9": "47VngTwVHb8i2cJD8z4eotwZXeUqBGArthc4TvGa9UwunwFPGEpb7UnEnphBiip1K2y4djRdmNmFYi6fy5sNpwSv",
  "key10": "M9QKpGeWhqpuT6yGws5pHi67rGvD9FuTNvxr41f4hBiwp4Br7xECJYnrRPQvJSAVd8ZFRkPwEXR1tBiZwWe7aFc",
  "key11": "22r226YFYdZ2qtAkx6MECKw6P7yM4f6KuWTbqwJJxoX4nEdstqVjT3aBynJvXvdEUeaKfHQpUGkpTph2r4SdM42Z",
  "key12": "27NiePt2KpfEw4Z817uUupwyuZUD9FnapMkqyuRVScHv95KZ6RVSzRv1eFBVhx4udfV3qLKeTH6CVFaqQFLCgBCL",
  "key13": "55w4aMzr39EZEdzC3a1WR8iAY9REMdRB4naEwZdhyacdtMMTGfVX4uJnnDCZ1cSYtJQ8Qf5CnUXZLgm3aZoXfZj5",
  "key14": "5k2pqggnothc6Amx1gkuiR5QGrm6Xchvq31XqL4Dhq4FwRJ98XfAsuwyNQH6bGi28jvy7czHHb7pNG3CmsDqTH4R",
  "key15": "3Ets1HLAa4ps1768PE7Qyt9rg23FyNFRdU1Vuqq8RsXieQjiUTWzs48n9LMxzW5vgH3MRH9gTTgMdu7aEXgAjKQj",
  "key16": "2jwjkMUmqUjUUyU53LDFZYkvNVkmEU86LTk2UzJ2RWyQ4iAoNM1Dv5G2BgvRJT5tgbyhmNU7n2QgAXNi2qPWj3FX",
  "key17": "5Xc3wRrzSTGYAMT7RCrcf3TngtAA113WF445wvHboNKbysJCch39cujphiXrbfjkv3XyvUz1Ncg71qyzz8ALD3Wx",
  "key18": "3rjEQm1qWLZSpr5zMp7UguGm5wvzsMjbCYFH4PwjiDfkq5mxupt3ECo7xKAP99b4oTM5JjDfx9v2jTBDDkfyczaZ",
  "key19": "J26ZhJM5pGnR7PtK3v4Vu43KiFJbfYZ8ncf1CrtKr1x1iYdUWW75EYwMF88pCmEMc2vPyb8iKzvugsC1W3UU9U9",
  "key20": "5iLTUoTc7eDoYmhWa2LXiMyJVMqc95RsgvEWyqjC875w89chy8mi7qAx3jyHaGybqQ9ZA6LvVg7McDgvBQ8C8sgS",
  "key21": "JNjN2dkRqK4Dk5crbLN3g3W1NN9booAmhSZgRmiRH72iL4baEdgs4pjzypJcQwXCrExYrw2HwcSXJSudfU95yLJ",
  "key22": "2N1CEwkhovYV2aDBsovDjpdgheTs2YkxFPYA8ufADWNW7U8qdtCik3MeXhcz6Et14AZ8nHmQfVx4nbAN4eUEzJk",
  "key23": "4HcNmy4G3jcT2QA8fhmpaPut9Mzc5JaaKnDYmEh2hctvRQXx3ThJAhdT6m6nyQC74TvFwP9seqGZZoURwZ8xnStj",
  "key24": "4dAUnZCX73wcJnFtnum65cUmLgeidKYUtaJuXgnLiWR5PAJ7jEszD1PwnrDHGqbm998hGA8rSRfwg5sktwcmELZt",
  "key25": "5FkCmjQoo4hMNkpRHUnyaDcQM7s4CyYRq55F9mipwSCrU5YuF1E6FpkDwg7rnyTA3DZAmE2NrE2FjvzumJEeqAFa",
  "key26": "2djtxZy8FgiGCWxFMvuK5tsU5ZUzmQ8ZfC5dBMGio3XVXWkVnwABos426za8oHwW1Soby2h2eZtNf3mN3x2GH8ef",
  "key27": "5556wEnRe7f6YYBtcyAgU69H41SRNypj5JbG87wYXJwKr8dqc1KeeHa2EsxDJWFppoN1ARM6MJZs2atuju3WBbyk",
  "key28": "33qaSZgL8YCpz8puY7ywMDmMRWGtdCVKUFsa6kJxhcgZ7pUQysMoxrWdPw7jKYyYt7JF16sKGc4Cmn2ormtwrj9",
  "key29": "5D42FhkhkMEhxDNr48ZVSq6hBkHCMCk9pHp4KKNTNTBsiohd4cTRMbkGf2CU1EzGa4uKtcAkbfDjr3DEJt3nMCDz",
  "key30": "3d9cj2vAqJMaRPfnKNo32bBH6qj2tmXdEau39eQHHEFmvGbrNn3qdGfZgPnPbAVzw78EbK5AcArR4qS9bhLBbKxa",
  "key31": "5ho8RWGJWyipxbW4w3QPgcZjbe5vn99Ha8GyDpSD51jGjZKaM3r621iPHcAR4qvve4Hmd4d7yVP7cb18ZX9YUBud",
  "key32": "2EGdULLTZtsjVeUfyQhuPKoNWW6B3qsUEP57VyUuixCPFmfwgSFJLrmqFu7UYwjXGtj7BUSXQhKM8GGNDhq6keK6",
  "key33": "E2J8BSkTzvUYsosW3yA1jByDvshwZnYv18JL2ebUdZcXGHCvQLGqRmEhcQWBPEawETKzc7mgUYYy9JQ1TpkNZE6"
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
