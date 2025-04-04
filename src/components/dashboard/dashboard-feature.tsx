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
    "343fxywMsm8DBL8mpaSGwiBqK3d9uRV9c4aF76ttzUXCAzweD54sFMp7Ejs7GxzYuuZBvNezZkw69cjwLgX12RuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eZWJ9HVPvLKeBiZUGxdJizETtrjD7jmoSjjNW7CsPWxztz4bFGf9uXzNeFk1QncZvRrePKxpRqhWLW9a5cMas9t",
  "key1": "5wYsW2XrX98EgD9kGcLmoLxYdb8aZtrgh93GJyjz7RiboRtydTBdvju9DdLpn51PLtewVVkKwEr6yx64BLV86J67",
  "key2": "2aPphNCwYpgg5nz14WaeZacnRs41eDTFQ89rxcYNLREfUtrjyXsCDis6ZvUKLuXqAGvTNVkrDTcoWwsuJc2AtyDS",
  "key3": "3GqLP56LfszMYiVYtZ5U2g1RGV62uTEr9yT2HMvHxwXiaBZCGzGvVWZ4yHe933G4KMBxBqq17kbeVEm4sMAPGr8r",
  "key4": "3qEgsjVLWLyTuKtqmrNiUdJT5TSbVbhdBZgScKwzk7xgwSCdZC9bHErsSig64zAEZeBYhb8B7MW6vRFZDBhASza2",
  "key5": "Jc139UT7oRbKxmD25htUGMwkNAWqbXLEMiXNf2jJoAJwhgntRTB5RUpZALgsYnG9hLeEXcb5FgjpmJAdM7vSujH",
  "key6": "4RLRWPBLV7eQQYCH7icoqVqi6bHPw11tpByDVTH6M5qzw7pLqtCrRdE9uVZSVodr9dafVyHevo7QZy21Ag4WwWLk",
  "key7": "hHzSjrTWHJLjcd5BzQHpuUgPKxTkhRQSWX7Uv5W2WuHA7KyR2sy8qigaZSjdw6UiDMjgPrxwg44D2daPT5Lhm8V",
  "key8": "3xYZ8ZHhmC6H15LZMEFoUt5TwLu3HchSMXKSEtedEW3uEyf5rfjWNibeGVjgWVx2MnG1mZzK8FwUqDY5oBkGtkT",
  "key9": "5eHehFJV1NMcbDmVZYDi94obPgP8iEzGGpKvMvCeb9jgDKNW81xht45T42LacXucAjWLkPC7XZs6GYfvwKEWZyAH",
  "key10": "4jYiKF4WQpVTmDxUvzQEeBywiBZyUxzbDpg4xrhyQcTgm5m7YqdQabLgKWXMda4gAnVRDaUQPNUVptbVuGt5YtGz",
  "key11": "274iH59ypHvnFDe7u8QMV5RbVLjvaD5RUFyaLudjvkB8keqxqJFEpgBGiDB1TsVCXvuFvZ5PiYn6aLf5FTH2P26u",
  "key12": "5YnXTmyu9YB6XgD74BX1vmTjgMFTh5vWZredKtdMXuXn1NrHKVJLBF4ER5muq6qrTfV5MNS9DpyKn28DkBFsUS95",
  "key13": "2hS1Kbajq972pRANG6y6RurpcLpTousFXyFwWdnFEng7XWrX4mqMYcUm8F89fgvHN2PiMBzKEoeqFMnnbvvdohyX",
  "key14": "3NxNWqaDuAp1bxGKMPE8nc7mrM7KVvhXifY5XMSRbYMTouH6Zzczp4goWbMFhbQ77gQMA268G5JmnULnrMMRZNrn",
  "key15": "62MemxF6ibNv41EzE1zf3kcF7ip8R15u8M7QzYwqNN23J9fwaTziG7kwav168WDbhSUMQgwJc8kNr16WPdpU1S3D",
  "key16": "3r8hz5WJA3ZryrnkaPYVBz1Dzgxi59hKuAEZDb5bGqWWM5PMiJ6KrAFLK3ANPFmEYL9MuZxh4JeEWqMEz4XZQh4h",
  "key17": "UWeMAECN6GjkXYFmTM6AwJ3uW4BaytQu3WA61rek1KQ56h8KCtPwCUdq2FvSrFvY2HSLSmSr5iCEJkfxhKNn9XM",
  "key18": "3WmRAigDqyq3GwYvHyCYBA7okYxBn7q6687jSbiKZivtkjyridG4c4c9NbiXcotzLeyeRMNGdewZxVttYLCz6umw",
  "key19": "58B9EAmHdi1SY9wHRrXXVrv3Z25cqREpKsQs8DaPpoEE3n2AHAGMaobjcHimFtqJcHYfjMWuaNzUDXNHHvKtRRFF",
  "key20": "c9SMY2fwD1KYLEdX5XXPN6aqXwMnWVtiUBtf5Xd2vZfSkVBmx5wZTYpiUChK4r3yjLPTwMhi8SaXNpqLnvzoNNu",
  "key21": "1DdU95yU4Tcd5LA1u7fm2jMbFxL5d3yKeQoYJrHfwjcupK2cvSufMUMH4MQMsQWJxmPJnoKtcr2kystPGsSWXyi",
  "key22": "3RSpReWUjjAneQUtAWfbFiL7ksZyA3yAnVZfq459gMSHrBpog2Yk4d44cV2TGNMuv4CH4fWSsvChnvRmBoWoLqnk",
  "key23": "whFUbFeVztDMyyrysMEu1UujgpX7Z4NDVZU5CHjNpv47By3TdbKjY53nZk7dE3aG33b65pgz48uf48tnb329FEE",
  "key24": "4Z2ACHQpfBLsh5Knm2m2Vc2JXKgCdzjmxisQswzoYgFXjKLecByoze3ewAFKiDphA5ki9xvUpKcmhw6AZVEzeEVJ",
  "key25": "4s7ANfT8a6ezKVQBKVDj8XEd7hbRi2KrhdwbfTBJ1uprdg2YY4acjrcHPRXyrU3HRvnUt7f6EiBw8JKcM55VTMoz",
  "key26": "3S41Zs5CVnC8VP5yQtxoVoqwMwVu2wSussnEG4U3LGB4fviSSeFZRotokWAeXJLwc3qcQX5CrJTMcbzbWhphVBYS",
  "key27": "5C7ytuD1d7FMwswLuiVJxZUChCCaXA2v5HGLeYfqX211BUA3g8799LwCR2gr4sCKR7i2c2thHGbaSa3kPZTnWaJG",
  "key28": "2u23kfWFECSSsWUTnMHSfnVFCFDcDKHJnorWAh7SXZgo4rNBwWjVmhxm9ssG6sqsMHZAspZMhGF7oNpfbW2e52KF",
  "key29": "4eEcc1wx2khHQKuo3TCcazaFDim6PtKCnQp9nnuei6WDaKKxsEiCdZt8ga2J8KSiiBVQBPFUDR3FPAaSmV3m7EjS"
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
