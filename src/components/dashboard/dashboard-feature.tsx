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
    "5Nhp4GS2YeP29vV7k8P6ycEFDYvFbDDNZ3f4wKVUi7ZaZ86htuMfjZcqxESyQUjKfrE9yaVnFQePf9dDKibJPES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n12VyWMYxg2mbmwaTERE4oBogeEZSgCiW1aGvfSBtt9L5HL6Y3suQiNT49QzGzLcdzZSzP6ferbRj8eJeoaNP4m",
  "key1": "23FACZNS5LLKhft5RFgP8kGwTS6kjwWhstaNMELTCg11HzrsMpwCtCAdr1JLLobrqVgKLUJGnE1ku1hXjujndmxE",
  "key2": "29ePqiTM75CyFtXTpJLfhVRpKLG4n6NRdyPmuYbiZ8BiK22TH7gcJijHGb8Gka12sSrzehwJY7XoR3EhXRKY6yKi",
  "key3": "2CkzznD7huohgK5iM8qNMWJaK9xG57zJgqjdqnN73ZNRhJSvn1ixAdHV7c95wjc4dKzyg9hJXx1NYdYYxaihGtCA",
  "key4": "yvxNFUq3JEKn3daYWefXL8RQxCtTJjvLKcQhfgxj4CvGQJyxVgo4So17nZYd1jFZ5gN8u4ctH1RPUp9JDSR96DF",
  "key5": "5jz6yTh1UPfqiWWFPUgQbmS2fPG3GnGwcW6RyJVL4nom5RUHARx7NWJGuUuMtquRct2DSqrgYM6n7up3WZG8nr4M",
  "key6": "3dUDdjr26Y9hfh3hHf7QkVCnhDroJPWykFrMzys5E1zHSzyvWWxjkV8CTgNgKhVqobH35PX3hYeHnEpWCTwnE8q7",
  "key7": "5hoJfALtfn6EJAW9TVCH6cqCyaQY9GeRnm6QKzS7ErLsqyW9biZMTzAJqadC1QDmhUntiUQX8wrzyxdusbtWErmV",
  "key8": "3WWNBabCXvDkjoxrvvXsLwnLyCS2nwCaxvfmHEjQEhgQWsH6oA5ZtkXfeDprJ7M3T8vxY4YPqF3hGeW3ZDsZJK6d",
  "key9": "65FzUbRd5dygwp8Hu2pLxy7aqenfuLVuuVKw2qcyQdd219M9GbEsLTRGA1T8cNoAdGMN7irpPy2by8xfTVHBeY6i",
  "key10": "66UqEMgj2tTBVbfkU14f27FDza53kJxWbDF9GRDYccJFKZb2RumdFQ3S2P24A39u3cuqbPLvkmsECik6ZcbB6XWB",
  "key11": "555NcYHRtnRoo4XCzsonQQkKUTmV681ZH95sZ2Nys33vsvHj6HJz4P9qQqL2bvJkGB2J3VckC1uSd6jPPxM5WUam",
  "key12": "3xyoTXc8AxBSzbAqmfjWmq2mWWkxNLBmCUNLmhcLMWSdqj39sQSiRJDgyk9eDdKJ4Y8puBYFi6yVoTDoiojf9Kaz",
  "key13": "BHK9UU9N3JYEeEKbFkBAwLXL1mpXuJLELfk2ua8Jn3zrGVmc9ZgNZEMJRFoXGjKUAwzmz4Ya4yfm68v4GXbgQ3p",
  "key14": "33ENGM3Siyg7PcZo2XkN544BN36efVjcmqhvshFCqsZLBwVfBZnq9HcHmNHsBZ3QeKvoqtaCfXtGFLNbvBQ9Red2",
  "key15": "4SY9CeiyQQLSEJr3ykFMzoWLyUKyHReFWLNe3dTquo9K5dBYtGJHXdBcPj3sEwgRTbTku7BCZTgD6SfAFbn3iSpd",
  "key16": "2LS3hqQNkGzyqypWonewdST8AFvxQ6fmpAD7DWwaA5U6agENQBFGUiBgWcLpk2azNXfP9tpGRPyW3Pn5YYpWmUo3",
  "key17": "4WrxjxFuZXfrXSeXhmy4TiPN49CL5g4FvoRxkeWUX7HCHqYKd5iWkEsq2L4YsnS72GYWCCXJoBoSiTNxikbRaMJW",
  "key18": "4EtRMdESUKDhHWxw2VKnHVoLMZwbB94wNGEE54N5qdDRYJypPorWwLsSFLm84Fr1Wn6qhZJsPZW3uph3Sj8TeCH5",
  "key19": "4nXCgVrVD1MtmgvPMR4PzU4vDVJCbn5NmxYD2C7jy5amiwFaiKEUXdryh8Vjfxiq1qZeEkcYVCkr9AZtSMZ52jW8",
  "key20": "2bbrw5BHsRC18aCVaKQ3ns7oUEhgqGqmjbn6fvi9pxA2MtqVPFrNZHsBHvmVakW3w25vbYrD7ZdteiBKaFQzMz1h",
  "key21": "45zz3nfzzr7DbGWVdgEk2PwVYbuKuNuhbJc5vDvZcEVrxY5hvhUVGv82PEw29HJPhM5D4s63dHurYHZYbw3PwXRz",
  "key22": "CZjfKmU5KQeaN6tvPXEqVMt6F5yMv72s3e7aJGyrzKpeDFqNvY2bjpjoRX1a2jLVw6rsLAx3TQ9Trcmb1TwreQN",
  "key23": "3qV1Vdc8HnuPc1YPFpcV3qL6snHwphvpnynYwsAhfTSyxU9GsBL6BZomdCXXBQRS29sFgGtaJGA64oyhhnBTig4X",
  "key24": "5iAtdXC4Gwz3kV7DNkfi3z43DkMur6sELkjpJz17QGRza1s7ttkLi3HExV5LVboU7vW1TEywZazG6oKTiDD9YwFz",
  "key25": "4oBvrzDx8N5Ftdo18ziMufMRHtQRVUn33bdi2f3RkSDXLeTweHjg3cpC1jaEx9KnaBKTABZo17SWz4LmQ1T4NT15",
  "key26": "3BEPokWKgtn2vYRPhVY19UsPM9m2rX3KJQuv5qudtRhTLTnKhyDKz4AZACHW25o17xCT8sxQYVa95WbCJHmRWHht",
  "key27": "4rJT6Sj2kfZrEB9B51PAfagHBxfMQESNbDG2NK4p44xDFiwNw1F66mCihAW6cWX1CiykMbFnHWpq9B526CMmFRA6",
  "key28": "dq9gWKfBHVMUrj1uD6t2RscWtdHrZLs44BVzwdYcTuqu5awVFxzRzaGJ5XrZNaxfJk4kHBvkNwdV4udqgXYADLZ"
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
