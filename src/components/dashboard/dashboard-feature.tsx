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
    "azKtojmwo59HJCkhq7xjnEnYcBAA8Na5qAUnU6v2qWQFanTf8KHw6VsqerixHbKbkUuvo3X2GuGucWSGEkZp4Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6Do44KhgL27LJoMKDuZUee58Hp9x8C1gYRJNKw2g4QDQ2mKDrGmRaLGDqJkYokKvAxFKgEfsNo54sNwC9gBoi5",
  "key1": "4XgeC6vzZN3cpDsbrkusVj8ZiRGmfJ93qF1CPb9SLKddzdJZNETeggmA7J4L8hTAf6vhkwCnWxAAFUVmqWym78iP",
  "key2": "5LWHmp7Q8YpbE3zYgoJeBvNWQu1QxQVk1ww2esGBT9uMfEDQmWxgzc9zmzrACsEX5VPhTAWEnSg46numJ22tvRcs",
  "key3": "4XeAJYjaD6hbRtkAiSCHEUGpnqfAMmq7XnaFhZEMgfdCUhWvMPLzyedBV2KPw4ZpWGabcki2ZQeHRbjgkxeeeYZJ",
  "key4": "4VX8dzeoWXY5NGYLmBhmqbAxRGRdho1U7EdCbd27tNnHM4E3nGtooHVTMXJUtni2JApRMAgTG9JTYvSRduWCMZah",
  "key5": "2ZYhkdG1qJ41L1KKT7T1aSq4q6hafF2GAXQYKmtJ2zk48rvCahBaoRyopzWWuW2JqKxRcu1YyT98HWsrfbBGqDqq",
  "key6": "3hdNfGLddWKfj7hW339c4CoiZc6KBP6naRb2wmyBf8fEoNxxY6mEpB8LBcFMVB8UjMrECj639LtrG3cX3Wh3uNgG",
  "key7": "2ih7XmTw5CRmU6HbUi2EbJbN8vckmbBNNaija3yUAXwZ8zE4aah2rPbvqRpVtwUZ44h8LLcj9C3iLuKx8JCpjFzP",
  "key8": "8ov8QaHgyErFRNBbDVkjcofe76bA2PDZXQToBb5LXkbcyXthA9A1dtoKMq6iocTY4fMKQq29eDmg4wDub4RDn1k",
  "key9": "5z4xGBjKAVrC2R4XxqkvNwj4CwQr7bt1DCdYk2jkEbeF2QnHnR7sivnFkNnmMiWDSFbv4Vk9UUL6krRRk5HDsMKQ",
  "key10": "43qmt1dENEnAtNXDBroRx4fioRoUPKDzTmioTS8XozGRNV1R9DHp6LCiCSEfEBiVSWS1tyEiTKJE91VDX4xAKAbL",
  "key11": "j6nTRaxWgyWbGCuwdGEygd89q7GfHs97J6YLfwb3E62sUzwKczrdctrnN9RzMQXZoTyi7ajezcu8WXx7SN8R5SR",
  "key12": "3eYWCunkMwJK2GvAxWw2eR3XHM7YsQ2aFD8Bzvdj99bM61UzVHfEigBMQDZ28wkZdcRNPhnbALGmwEZ1HzGNTirv",
  "key13": "2MazqprYfm9yjzCwR3jQKjEi5wM9ddsfsv2tcbpRuXshLsHu1gMg6JPXFhxpdbyKkStPF9mBkpBvbuwsg5au3kM7",
  "key14": "3SLtx3m5NkkoDGM3dFBnLQ9ixNsccHuS7pJwvMBzqyMA9qz3rQkR81ggNDXj4xMFSkCHnbW7D3RC8tbHY2c3mK3p",
  "key15": "2M3Asp3FSvv6SiR1uKNeaAJBJkkMskvur6aqFhbHACMQGjLJvNVRG8t9tu7cccTFKyd69ZpGopWFEW4jrHC1aHF8",
  "key16": "5RNKoPNbth1XZzWV9mDaJsQMwsKhgteACNommhkXeitEXgHpBMSRMCDXuzpM2MJGjFLFxLCRBmKA2sSoTKpmfMPK",
  "key17": "4jsYbnoqoqK1qK79F5gt7dUkSTsDtQFjQSGz4Kr2neZkrMYqovduhxT1Wu95Xup1yPwBJ975dBx6oKbyFeGXt4ab",
  "key18": "2GGanLktV4ToDBS9VjSvrdcrMn3j9hW5Q1htbesMqR5WGHfMFgiw8LpJa99a2HhggVrZdzr7YQDGTHiyFSFSjWww",
  "key19": "5vkaZcBmkscwhyyPGaUdzGZD71oDmoTphfAAW1Fcwx7xb7XWv3ctKNhWT4jCSmJ7LdGVzZ7q1Tnc5opCnALLk4kG",
  "key20": "24u8nZW4d4FmSmTXHEg5PNRkdJibuBYgFuFdP9dtkwEEX9QBcKNweeAugNN3jR13SZ7kP8yMTApZ8DSENHPDEBRY",
  "key21": "Khwj1YYtHe9GGVTNU9u5FRgm8KTVZS9Kq6mb9HLoLryDTy3iw1woqd9k9k2wwb4sxU868JFEE94Ur6jmZpqMEQT",
  "key22": "3rf5nKRzG1J4eVJTZz8P2SrqRThjdnyqkeeMPeQpEvfLotAycdLpqhVEJWWt1ABWn9TPVtrBAaSXToVokp13ymFx",
  "key23": "5eiEWtcy8Na8C5v8bNpgaDaZBVeREkSbFxTdsNjY6TTmGfGRru3WmBycarY4td9HkQTaX6uXw1EcpWJCTaxb3Zuf",
  "key24": "5BYQzxgFADzpsNKyHLD9YHojVxaAUtBxnifmDjiUG2ohWDNx8oxmUd9nzVQHCDJr7Bopup2CsEbnH8mTmdVXzZjj",
  "key25": "2hcr47AREE9oYUkKoSadiYb1iaeuNeowksqkcGft9M1n65Ezsmpr8XAZn9rRBEFcDF97YWAoogQicUpgJWvXUcX1",
  "key26": "3zhNqtvmuCebdV7M9UPsbGygUPwVR1TPC7uvqqjJ2kFwzxmCLnMEmwFRCUFySiXdTU4UW7hmWeKUsxM5mgxtSfPy",
  "key27": "47d3tHFH8PUjkXR6azxRXKsFzFWKXM4LAgjUVnNS5Ruwk9V7UYpxFtmTSGjroAKb5zwePspo5JrxpFtvTgUVf65D",
  "key28": "BntU9MVWrfDSPKa82ouQ4dbTe2JfEoMMZwfnL3pZa9xHgti5Xp432Xh6h4TuvyTWStdC9P548cyN9yh7JSvLU4i",
  "key29": "2GjuSBwMHd31VmuxSjiTfGSxaxcHvekBH5BCsHyZ1UNL5Ypi1erRqyAxjaM6yaXie6sCFRSfti7mXa3dXFZuNTPE",
  "key30": "5wF1vPqjC13MLkgUb3NeBBnCs1CGV9hrtPwLg8uvnNRmkGt4urkWcnccqwMrBKnzhyJsWaPaB9GtNAezH5aqMF4t",
  "key31": "JBB1mYAZ79KfCEHf6xinLxdM5ZXonzfn1VAPyT1kGE2VNbqsRS1t2ysGn7QUPKPR7BkQ7m7GyXZf8e2N6iXhXcb",
  "key32": "4Uwfh7jghrUD3vX1RvsX258unq7MGHa6GKZevPZHDLuRcRPdUA6hjW9Ws6SqaafpYxUdtAjRekufTFHkiEF4MNLk",
  "key33": "AJG3TSSnH32RZ1vJYNnToYfsdnCmMS6QdZkJ46MDj97U686EWZBv4yvDrRp5tG3ewJJfKDwtSiDVNqa9m7u4i7g",
  "key34": "5vjB4E4hJMQ87bh4EsSVVsXYrPYf7YkjdZ4DqBvsbuy1wQ7DqZMQe426aVe27GhScgSzj5xUySagoawZEWu3Ef47",
  "key35": "vDF3ayjQciinptH1tdWVpaudaBQs1W2J4TXk58qLbooWWK6GUN1M4SR6DVc5BpseBACzeTrgxsFWtH6QssSHGp9",
  "key36": "3Kox3tmt19nkui8RhVfvDfukX2mZKGVLuEAWTwvZtwh46fKVDFPATNExpybtSz4vFKKiDg1er3DVw7UXEeznKpjS",
  "key37": "9yU7mujkRwAMmreig5yYBEa4LRqEDgTsVs5m1JAUbmGgLjcCEDbjwRDdm9LYWfrWGDQxQtj3GqeTRHh8SvVJfz4"
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
