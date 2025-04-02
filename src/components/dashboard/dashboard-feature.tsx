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
    "42TJg1N6oXiS3sHAsGpJQgejrky9XKazu2XTE173Ljy8hf32peewZLLvd1JHHF4ig99YkM13z3vbePQ9uf52dBrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jP6vzHpy4sm8qFg1u8jwHA3KT6yL8HcGuSAC2LWVUQdBiwz6YUhq9tEqL1d8bFJEyPJj23C3Jzt4E8aXF4QEAx3",
  "key1": "2gtFzb4tkjn4KiNvwQZLunqcx3RkRFWebxNMvtZL2KEiUtH7GTt2GQCaMTG17LBqh8t2BC1Tf1bsZDQERkJvi2Sr",
  "key2": "C5GvxTh7CnE632KQEmpHm9SdiUaW1Zfxws3yuVJmAuagouLDHYDoFFetXby4fTCSk9gn632rPjyFy7xiHmUYzwz",
  "key3": "3pU8XmMor5gLHiR1ANzGTMBbpft6QJjYwH1YfKX55VdeCWSuNuevVkECoboyrfhY3QPxXWkBq7v6n9vbXqN68e5j",
  "key4": "5RABvjqSmAVBySrx1xMmm37TVsFKERmQ5mRmtsYZxhvYjcLima71iLyWUhNKWheLSY3cRAVMS4Djosug7X1feAJB",
  "key5": "4Eg4K82KS3xt4KUrfPvEJcLFitpXxHfvJtrVtcysu66WsQ4FV5vsR3GrcJoMWYuNCPbJqDDVZnkcntnxksCbZsNV",
  "key6": "4EemKvKt9W47kqd2cryTDTXrHi7KcdTuk3jjt7qeXUGruyvWfoSBELYdfbgCniysNsbgppysJXhRRJbYUcTs53rt",
  "key7": "3scFKUgaCuQ8uC2bJvCqFsr4U3MhDoGEmECdTyKve4EsdRK7Pa7hrNAJtFc8HJeZhCjbthFbSrsoH6cdqtPnf93z",
  "key8": "1EK8eYjCD64stnUwpN8piBCU77duAnvvjYCZoDGe9BoV3gWesHNCrHwHgQPFUwGiND41LsnSs9CxYWuagKBykFe",
  "key9": "5CVp13Prpv5bQ1Zb3dep1g47oxJA8TYjn9mQrjqSoXc2o8gLMbcvf8Z7KDk3GsiHn48Xw654E2MiDrb4wf9E7SCV",
  "key10": "2Pwjedu99HxmgHWq5Q18fhED6wY6GbQnwDdxvpraZRAa2MqP4vtW9DZSoxALWcGtPQMBtNpGFiRKS6PjqiSWevxM",
  "key11": "2h3CMdX9pQqTJVY6VXh13JtrR3qQdayAqsQypbcUFQTNXyJ4jeutTH3a8qLUTb4Y4vpFLqo1KKshMLouMMZfByuc",
  "key12": "wcdzuz9aacQFSqDoZv8heTw29y1ZHMVzFPBjrDoS5ZefzGHxKkFZ2q3UVh1hAV2CRbt716DakxPepqN62AcaPvd",
  "key13": "5XZtPYHcdt81FZfwNYLpg3ZRajLYzasFNxBE8zYRC5mMZmyiDvBAm2pyfVjjfbqWx43czXtnPa3S99rtjkdQE4Mh",
  "key14": "5Fq5BQxgb67FGAeDWGNFDVyK1wbc1ESLTqrRQq6CZSYXD1jpuzkiaxMup3L5WG7iSAivpGkzggzQifDxk54BEr7M",
  "key15": "2MPatxTmVLofp3CuP3MeroXNKZ6VZS79DrB7X7XcWbPau3ZohoHHZ6AH8Tw38j1AU4ZPRkQroEgdK3zMZKmXnH9W",
  "key16": "2Mq7Q8rZaB5CHdFNf8aeBTXCdLGnvqNXdkQgEm1UUDb7opPxzZ6yYjCtdPCsNGEmShCdbehgbzNLZmMUAzCm8ZHV",
  "key17": "SM9Uis45iTNW647Dft49aX43br4EpHhcPNhd9UssJv7dta5zwbm5ZUQoUHPthe53toykK3pZuhfhquxvAfbuGXW",
  "key18": "5aSL7GJFzxGzWPGXVomQ2EXhpwcUs3PpRRNbxwxgUH2aBw2FH98w2VwuyRrgHG56YR7mEtAEcLCVVZEmncbAqVeT",
  "key19": "5aYNe8S33kmbUgZXUGwFMUoYJKeEzRyVwroJij14FqzBiWFmNYTkJpYKoi5bJsjHvU8zdpYU2g6AqkC9fznhFJnV",
  "key20": "3y4YDq2qu1BmuT19xj1pFvuy3XzPJmM1i86QiFpgAoPhRNgwfwRsnecerRY9oX8SRUkDqu4UmvgifVWoK2FpN7P7",
  "key21": "Ck12pWgTLnikjy2z3WUYK4cb2d6h8qaAotPLG4HEVqud7xBHbmNAnBsc6AMR6T2u3aQzpsp9Zv1k18PsvE9gfTa",
  "key22": "5VShiHUdYWMLoagHPPQhtCUzzZDyPbAfkRo9AE9a3N9hSL8XmCr8FsgpbR3k6H16RbvKEym5X2L4wQSowT9H89tY",
  "key23": "poPogECN6XxJVzNRGPGu8xoooabrXbTFQv2UrW4RQa64mvWZjKdB4CGVK8ry5a1TVDkDqVU9wMLThiuuDgKmw2c",
  "key24": "3jsKPZTFc6R2LJMcJWRxSndEiVk85TxYChy2WGRerxyaKRqFqqULxcaqTkcFjLKQ45dHYPWjuxYE1NsrADiSGF5v",
  "key25": "5Soqyeeu1goHMrvxA6PjvohT3VDkWYq4Tz4BQ11a8AcxXq3BdtA9YdaBYYg7s7WAqE84YS4PBHNw5yfbtz1ERMRs",
  "key26": "3xFc9qCo29hTXLgWnxxdgptEVjBfK1fx6uL9tKHTcj2wxBHXTRf49iNjwi8JtLujRyRBM66crMc3EAznkCC8eR3Q",
  "key27": "5x4jK2abXJMJazCpUXaXsBbTLKReUvdWzSW4XfjDJJgsB866LCJHQv1oSY65KZ1oPsbeS5fhrfift3Y4bmz6QLY8",
  "key28": "5AynSFsTwnDpN53C72HxAdnDAnJGWb6PLZu6kECm1HsEe8Yw7ePE7yHoKDky9E2h8iDMpvYw4RCFbgteria8eT1B",
  "key29": "3Br4Epfy1STsRYFa1qLcGew8mwyKr9CiCKZHUpoWF6ZB9kwfQV2vgEqzdQQPaHwKyA9sa2XUChu7j8GoriTrtxJK",
  "key30": "3FXn99hq8VsSob8vdoCTkbLzyxbBDsuLKzkSRX61Y8FeeSTXcbdAd7v5nWrHAASGZxmJiZ5fDkkRLZtHTGLS6Cbm",
  "key31": "3Zuq4dNmTiN8RPUccSP3LgBYt7E8vsd6Z8LFgsFZCA7arfKjmDmhwqocFrfZt8HAQmtWFD7GrUx57hezPwDyt5RV",
  "key32": "36WQNaA1mxgj9EbMtmFiXsG4FToDUEGESW5kNW756hL6bPyDvgqrmx9wb6vZWCqMpQzSwDDNpNzqCVp8NfyXhjm",
  "key33": "49a1PxWeLj1d64ysXQsVsm58LsmLxjLf2sUi7hr6mQeAsNEVXoen34cD5eQ5pAgJaaKtjLRu4TAQpcWqa9x9c3mG",
  "key34": "3eQJyTwBfGDrxfPqrd43XCe4ehA5WhTSKCGuhuLGCXEJQ1DcWv47TCBP1kkVgyHD7YJvKmUk4g57CUzEpi7qcXsd",
  "key35": "283kG9PcCY52iaWrEaHbRncbF9PB3UsD5NT3ed975r3dM95tDjQYN2LXTPCQRFLEQvDd7f2JWBmKNzApMxN2fJg5",
  "key36": "2jpsoohfw82Eq23RVpYu5Nmwwaiuws572d8T489bVM2S4GW2FhUv5yZ7dbkbzGvmmSyNjymx6KgpdSKrkgvrtp4E",
  "key37": "RiUcrKSpWRTMihMPaoD6yc4prekwiMPgWF9J9usHJHbePAiKSxipXips9iTqmC3YZeNC1HDhmXKkdUzXJfNXD7C",
  "key38": "2f6FyG3eh1KVrtcmPnkDEMYTGVd2gQsb7bwYkK7yGrJLkznS8UuJFqkLWoqiyeCKWpS1LRSmbNGcBFfLagYQpNpj",
  "key39": "5LurUJATqrVhr51MQK2pQaFUQgTEmyUuppYDucQE7mRZSBVuM5eyRhGtc2YL5cnFQbEJFTUvxR5DxUfwnq7MRQfp",
  "key40": "3FMNZLXDrb4LysVNRwCgGiGxm8avoEepebqW7pHF6Hg45qSBvAAygmAWAabtL4LzK3MdMS5KXY8sykpATyT1KqtA",
  "key41": "2Zog3MVHkf9anJ7hcbAxgq7zfskypN3yYZPeRzthWxotBhFUisx55LEEXtgzac8NuVd71qssj7sU5ygQYmbxoUNb",
  "key42": "2emmUDGmP6fHX35Pw16oDRvdvWoF11GLSRSZS6ZmigktvCfAL4DGigDg9nv2GSh9KTcxF5jY9Pi4Zsw6pTW9gnuq",
  "key43": "4UvUdG8kKRWRDvyC64tiUeoWUmzNom86s1AFJJb8ZkbQfTpshW1TeiLBnBtnPzrju2MHWJaTbwTZ6oL4BM9MbMK2",
  "key44": "5Dkvm3AuL9X9B5oASgHbqYLM9LrPijfkiPMWzC3b5C6GPro3rs8k8pykMh99kdzC1R3s5trbGpS5EDoGrZAjxgGS",
  "key45": "3iZVHq1F1t1CMExpEYHFkZCwx4ChX4PZvcHQ8JEavBpwCeGPvZoNtA4ZgkbDrcLBMwzKMPUyQV3Xe3Z5ABtLbs8X",
  "key46": "5uLrVDXHGLEtNquoGNoe2jHKYvmyNck7yDPbS7WyjLBLTSFfo6DrbKAZhQBG3NS1hq34SvoqnfLaFaush19v8tmY",
  "key47": "gWS1NaL9AFxAx1nv3c46tGtmr6LXM36vMVhmh2WnBqxSzswE5AGLaU7ye2VDXZeNSDP2F3Psx75BvRkj5LKGJTi",
  "key48": "VpEGa1SAeAUdJc8QZU174cqCXomFLu8JkkWMRc6nuhxxWwiQorXM3RPHhYjNVBAnDTGjtM55u9VuR2KX8zcbjr5",
  "key49": "67fuZvuTeFhNzVhTwPsFtou4R5NcNmVqR2vkTKtwFBmvmbNDtg4vLz7N3AT9CetxwFmMhWDe5qcLNv8giqriKbfF"
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
