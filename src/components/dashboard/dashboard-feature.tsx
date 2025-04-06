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
    "5XqWGWyssZnJoQahXXQprsrqquhj6xZ8makoYyXTmmTfy1y3rkBg4N3W5HVe4tfxBN4Vm6XWMBz9bNFXpfgwi21j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3cCNPgQUvNbARqNRr9Yuoygpn5BHgYr56rTj3YVW2KiJdyFBLLn7jMP7f2XCVkuQ26GnaSNfvxc9Y81SEXCZvo",
  "key1": "oGmaEDbdMFb2trU4uziRXebuD3cqnkiedymhnZTn4HSe67ZZe4wZBT98Sf5g4DQxufwY6E6UVfyTFYyCUrssMBE",
  "key2": "4xqpyrxQv2uxFCiQnC2xoCGwsT62eXTBjBLWCzGfr69tyz26Stx1i5C3ZMueimtmaCxnwXkBmQLh112T19gTpXr6",
  "key3": "45anAZgV8AFtoHsLK7QJTAbV3jDzQzDmkJmDHFP6ZNe9jn8qrjf3ECuCS22XkVhtbAaTRwxWwUDHMf1sT7cz3H9Z",
  "key4": "4EFZ9GtAgieGswfP5D3aFmXFq5aSBc6fZdt3yVDWfwFZ9FXmU1PBo98EY3qmLBJ4Ju7f7iBcXHPebqGnfEePxunJ",
  "key5": "5DUMjT6izuLx2k5QRTWJqhCe45UrpyedrijsBLevAW8JdXN7dqJoEmYotsZZNpczD5Ze4aoj9trzPaU9J9Crowe1",
  "key6": "5d3rUVVqSHcGHpcXooddhsL16j8iz6yjFw1iHYDMDYbqwGK3A2WVG6jWAgdiRDeUDvMRqvKR1zn4r3JpQDe7tKNY",
  "key7": "4h9KRZX7wUzrB3MF3ygi8eGgjpkkMrM6gCM59h1YN7UZrYhSPH6TDhHscJNLxhE7HFphfTmF2AZY5jTXnbhQ5sED",
  "key8": "2GW9RgVLgC3yosyLMazzvcrKiYfrmojJ5dMNdf4Fg3SZfR92YckSNVdrjnHffrjAP9c2YHxzJC8ADpBfoNavzDJ",
  "key9": "4ZZX4rqYrGasPaA3zhEg3iND8iufKPCZ17TsBmpkTAjuLPZgvCoT3Kw95pTcKGW7Fa5oTrDMuP5EqnWmFuAxGDGz",
  "key10": "5tgRNqLcLKr1wvgZ2oQo8FJPPc8Ps1xybQqY8uJoKVyN9jCQavQnvoosyxKSKDbmAA4DvkiEMEbYUZAVvVCVfy2o",
  "key11": "2G65ZG12jMPgdHoDTrEWCnRiSJ9qgRoWp6wwYRPNwaSzGTDGhhDUcy4y41GiGumaMjJQTdLcSNhqftX17qwKWWGi",
  "key12": "4hHq34QL7SKKoWgQaW8eQHTRehos2b89UXXA68tdg54kaWu5r9uYq9T8J1of8TY4UwgojV5BdHqbHvV1bpEm23b9",
  "key13": "5vPRMN3tmgMtEg2bccn5UK81bcSYcLKTXLXJThXAwmYQ6NjEmsBaAm8zjfQsiSMMh5SJdjT3iHmbSANm3gXxRgMm",
  "key14": "2o9yPLKQ5TFiLHtjczJZmCvyocJ6zFrZZXmm27o9mUsGiGXdweHHDZz75Lkhn9oFyQhQ7ByQeKRNTrtF3MWm9hTA",
  "key15": "2dMeoVMJ6bsyP8yi3V7g9EKE6aefHrsQTM5NuUyiC4SQvquYuq4BHzieRmpxPpLer1NAzcXbvQS74CdmUGwnLAHs",
  "key16": "4y1wt1yRQ3avzRrTLZozSj9Sd6Kmhsm5UBhJxB1SfPeEMg3sThWtqctT1GnQHUwbiUGfQx4ZW21818WNAQXcX3V8",
  "key17": "3tpmLqjkkiQQja8N7yswWmjcLBVwnZPRtnd9hZZ6otTqZmYWzYLcGHjZvDMb5gSzuNbasQ7HacFbS8vsRCKoGTNE",
  "key18": "4MiXmPAk1SwwaUJ2o2gv4FWrkNukdXdHXLS5ha9rcFf4BPQK2PHCxSFCDXxzKXo2gYXBXjjiX2CCB8ki5A34M5iE",
  "key19": "xAFkELjGMPmr3Z8vd2C57XZUUDWPhoPAE6R2nDpVoTJ1PVAfUd9hDL6PDag9ue7oig9thSejX5RrJMxyKS3PKXj",
  "key20": "ZGwMLLmBVqXx1kjA15yjSKnXHhEj6VH93XbrPn5UMnCPA2PiCBB5nMBnMxvLvYon8K1oX3ouB4hzN41gPFufjea",
  "key21": "3ezWRCM6iAA2hghGNKWL6oy9Sfbs1zw7KuvWcKEjDyWJmAJswTrgY2Xx7YwzZuDXy8XYDnjAkQWYwC1yFPhbjVfP",
  "key22": "ZvBLcrPpG4tGaBaGzFZcryK2v7dQvQZQ7kzj5Y5ELoTpsUcKpr6eZtczpNH4WyghkUzhgZ3yLAN1PxRXpRh4i2m",
  "key23": "25MTN5Ui2E3z8dEGrcigNAs6SBXdZnr8eC6jLLtEiSrP9Thib9u6LvULsNGq7jKNGxeC4LzGsg2E6KPTXpwRvm2a",
  "key24": "3GZWGE9QCnaaJGFfWE4LwhPsrABzhwWqmAScPtDwG8q6hGGFQhLGFzeJdpyHSR8UF88o5kwp3LC4DYn1W4tN5jpd"
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
