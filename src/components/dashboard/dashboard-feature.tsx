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
    "4JA8KHHCfxFksDxvLf5d7hkgdbGbLc56qmHmf2pS6qoJeXV8kiYKpSC2FKsRMZmdJ2NG8Y3WjkmbmjXyg3EAGMJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBnLLqu3dtvL34uoFQfDYX8oAPnyhdLdowosbNhjeNGiV6s7WdM4wkff1G127ZiorUse2S7YpFBAYJ4jpK2R2wk",
  "key1": "3v8Dpqg4N7qRvGc7qTzsk7fWcNzMz8TKDCBBrHyDXvr22qeSEFAp9VhxHe2TMXeQzN9a423SRjphesVz9VXaH6pF",
  "key2": "44AhxMCq4uui7sJEYtebf8QEWnSHJXgQ7XwE8Wp32S11tG1jQsb8gja3J93gx7JvChRd9x5fm4ZjL1trhyvpk22C",
  "key3": "qEffuFd1Eo2DZ7vvoCJUqyvFPxUmHQiGsuNCRRwRXpYSSd6qge4gRT2aYsLHr964VpA6KoxtzqVjwTTZCPkWicu",
  "key4": "2pamwhwt5ua9XrSeQVf8TTxbTwBaLbYJ38f76DffqApE17rVvo7XmHqEEnPvhxyZSnMmt9K3XzDRAsLboEQRWrLP",
  "key5": "5duNbfVrGgebFbQa8i39HmKv1QB4edKPqmCQEQecyvKwNRy6RDxKqLvRrrgp7qUk3jEnpSypHj4FbcpMEnydXQkn",
  "key6": "4B166mV3d3eKEGWiBmj2XV71wxZuD1KTQv78AnqmQQz6TTpMxTMVcrC53ZWzVVwcnwmS9gDJKpcBu5zyUheEiBxH",
  "key7": "41uRy7tBmqTZvP5NvC6yTQeXmcJKsWRhS6973KzHqR55XUpR6UZErVt2uHUS6vfb5KEWz7nzBzH8L7moTw6hGq6o",
  "key8": "2VKB9u1A4L2dZ4DexzTnsmfx3jHkLefSNLdv9NBBkAXWLFCW8iS8KNgyk1zJxs6hSyaJNBc6YFbc2Y3mjebqNVfe",
  "key9": "4wwHKWHK1CCszBV2NAe87f9aXokF1PRvBBGsEyFceQYjAyGuus7jShPR1BJPgdoWjFsQmyvZ5Jc8ww9aYSWhZLLX",
  "key10": "443eZoMx9W46ibX6Jy31RWhU4yngNUboy53R3Vq7yb72CWVtGtATqktVvkG8vkLf9czWye36LLGERQ3bgZ6bafdd",
  "key11": "4jfb3XqkvRxSRKotpNbSryKp8nLFgHimcL2sk2QbpDU4NSGGpLiGYs7XBfKycyvg9mFLANXFdty8SVkYC5R7jgmo",
  "key12": "3dmTT2mFDMQRZQduT8mEgD15ZxEvtQsHLVUSzGGuCtXPu6gTrYyvAJfGPt5GLDhcvdJijG3q2PWnGX42va6Yk6xE",
  "key13": "4sf162hYfXtE2k9dWxrjuUZ6pDBTpTy2jX2dviwjdvWdomFBGywS2P28juj8ghkXTQDcNTBeL9jwYBPXpaJhWHsn",
  "key14": "2jPLWUYrPfgs1X1TnGTqSwgBwwza6pMZpL1krQrV2T4dKDKtmpW2PuwpVj71SNrHxWeFC4me8wHrMSzrWnUtm35a",
  "key15": "5RBqwAbmBTLVZjonkqyRn6NNvVdUFoK8mfeUBAziwjcW5fy6cFYhJiBJ5RFLN9pwvFLoVTSFvf8JGroNpg6n2D1o",
  "key16": "5u9aej42zLq4JHcSsj7tusQEn9au4qsGiBmRBDUNoXaxSBUPo2XRrLSKfDKMks9FDXMvAXHb45cknsmH4pkBZyCx",
  "key17": "4cfhDtgJU6vwzhdFUfNf3kTMqtfiXbMRsA6RQhcN7i3ohxrZbVzjECr7wgFaVRVT3n4puK8aWhunfTKoaTxixx71",
  "key18": "4fUvXUeMRKgiTyfskAUx9JhjQQQzKPpS1bMRcKQ1LpQqaxbibK1tsAYifPaHemyzQ1VRhDmsRJviBYdWosttZhr7",
  "key19": "3BEhBSJNmvMww65QhszkUZwCbR1G5TK7DVkZJ95H1PjUZs2dVxUfmDhKtS8KCfHtP9pjAraHZoUn149Dhgmmasd1",
  "key20": "2wM87CKBzoRcBv2QmkxsrkPfmxQYgn6e7NUSKZ5BTX1Hh7d7NuGVnxWqhfrvWrbvEj3S687mTbV7HFDTSVzdk53R",
  "key21": "GqzTv7nwJxpayHz5427JQrJMis3D4wXgX8yoUmHhGqN46vxpJ2Pqiumn5EA9DX9o4tnQWHeaQH9KHdaBeYaBu1u",
  "key22": "2BzaT1Amws9eqq5y2yd5Bh58AxHURJgH5FMh2ry675wwB6yq8MHsSM2YXcHkmY4ik2pQkUTHmXDMisepQ7cKw8mC",
  "key23": "Nf3b4SEX3964nPQrjMKUK5L5nYFyeJQAghK7pL5pi4Rxm6Q8h5rZeUN5ePBt5KjW9r1NnWbSBJCZPQY1uZJ4uJm",
  "key24": "48SSmifgBaYmnJecsdcoHPPeeV4YVr8oDzbo1QUvLgRdk7qjA4KqoF1HRwzudtVXXdTdPHftUgpASf6xQRq49DTq",
  "key25": "45gJUirJkcXHwcz5zuZCxWfpbYxGknJHpKV4ucG3xPWSZXSCaMUrhwJMiSgPkJcd6SbSSuVpLYHF3r6voALNPx9P",
  "key26": "s2Dtpi61oYKVztTN2v9tAB79h55f4gKCC3jPgk44vK4MtUxwRdfm2vRGKG7XCF8dvS3bt5adyCsRwZJwKwwXDc4",
  "key27": "42XkBid5nRB2XGBC2Uk1Mf8nP6FteBRR2oUeBXjKfKkEtNGB5k1o7pVUBs6XiYkyPB8YG1g2WtTc95idoJfzm6R7"
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
