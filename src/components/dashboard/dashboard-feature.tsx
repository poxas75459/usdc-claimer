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
    "5Uef46LVe3N2tDibs6aLy9hvfgVgxLnKWAk3qpKZvLDHPfpFdb4TmwbLJUZFFkV5zA3DCQLy8DB9JbjGXYfKx6o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66RQKTwhcFiiWsHRxjywLucWfNd3pcpvnDA3vEkSNcJdzDREKT5e4aeymQAdXszEgfhrFn4cKEQh3ztgcLQFbUoo",
  "key1": "3LcUNf6XrVm3dYD2CGN5gn97j6daPhcfMWaEN4og7BhVZ6kRQ38saNQXeRSK1sAzHSwf4mbjx75TBGRq7SXTUmiB",
  "key2": "KHGuWwZRnpbPgUFx8CMvGuirbyeLZp4TEnxziyxfgTGfmNGD5ETqv26Lr64kwpiJn1x8mHAcVE8dFuWy9X1yx7n",
  "key3": "2DpgMVDDTnrp9qrW5mm1YQKaP2Sh41mpkfjm58zxkC2UApW88UneitKTGVi9LmAaaVa8iesEgwz2EJmU2Zm7EW7N",
  "key4": "3dVGKdmQRpZi8yUSNGbqfmP715use472tdV9msJFhQDFkYMP2czu3kJmVDeANtcukyeRDNSxW3L4hVHk4WYefgXa",
  "key5": "2VxWnXdttKCaDnijLf2KC7vkY6d5H3pEigxSce9HniXTtzsVU5RniNiiFWrCSvkxKHHcKiZspis4pV6ayNvuVLt3",
  "key6": "4UaXhQDRaTiP58TwbS1pJ6viduLjgmQJhdxbNVRtAwC9adWfhJdX16n2JiEBRU1YQDa4LGvn39BNQDGtP1aKX4SF",
  "key7": "2wWafwQtqDTWC95huCApjMzQ7PdwhjVcLyEqQvGoGWPJ9ALQPvg8EKkekY5aHUt5m47n7bXtdUXdiSQq1PKXVmkW",
  "key8": "5MfLQf2FrkzpCURBwpADnkuZzhutKdCv29vkR1SSQZjmLMH2U8RQ8WfckgZnTyJvWLu9pdfgNy6aFxzCdZbWT5mm",
  "key9": "5VCtrHQMZFv8reNDxTnixZrF7RbmUXSwtrUWY6TMYwp4prHPqLVchoywzwERgw9NRHAHvzkpZhLT87cG6BeANWnQ",
  "key10": "7D4zAx57Qdq47oYKsFApyFRWSeC3hYwSBNDyYCwwFRWoqwXCPiZDghzsDjmzLXY6e6byS2LN1ejhvXUCzCumhDJ",
  "key11": "3NaVuCMKMSQA738Q9i6Z3jgV3f46i9NYzpLpMpcpkyWY74HMiYT69n7wjkdpXQ7HsUZBuEUNZn2iafJSrQR5rmjF",
  "key12": "3ZqMggcPty5CfbtsRwoGdohfmrVH9izZ12RcHbwXSyBwpmv6WPqGXBM3Hs2MNfJF7uobV1kde2MkQgq95gA1KEby",
  "key13": "4PzgtFfyz8KVFcJdxiMRaovHECR6j7chTYu1az3TrqrJa7jXmFr1nw44b5qCNKBveRTje48qmgoWo2o6Sg7BGRJh",
  "key14": "soLAcDc8KJCp9DsbCPnJngYkCByxaXuNo42TPqNWGx1K7ET5F8eQxnrDQk8c84zxG2eJDmt5YuGmifSaTq7Kbgg",
  "key15": "3fCP2BVSydr5UX7ohcbmugU7zmzmtPtijrG8RjKMfc8ARVB2rDgy9n2WC2CnXddFHrG1FzxMqu7ETybCndX7fyPb",
  "key16": "j1e4bufiY4WY4H3bofgtNjahgTbRWA5GDf7CkWWUTr8NxjFaBBVShAcwVh45SE9y8JfVaCiphGePQxU6KFU7toN",
  "key17": "3QaCGW59YWsFGKovEjXauQP5XsxmYCiNXHGsVAgx8LiY87CZkmW22YYSuj3ppQZJEH2J6VJ2FfCXhPzYMFmqg8cZ",
  "key18": "2ceAqtoKezGicDUJcLWeaFCw3NbGCjEtCZXuBfip2dXKDAPkCyzwekgvZfPgo2WGZnMv7zNWY7PwTauLrGvSYEpu",
  "key19": "2U6Hk6oQKMWnr7tnr1EWdSUogaa4mwruHjyTUDbUhn2siYrK6ApQERpsddaSdonRuYQNdjy15AhYoYFSnE2aFQtB",
  "key20": "4rMhJ2CkxsvpqLvegHq9P1mZDEFpoQsgKQJAG3B18oqEhQgL4RtmRDyEr92xqEtQajXQey1xxWYff6Xd55RhVSTm",
  "key21": "5nszq4MFJN6koQpA7r4jyhyTFna7QKANw4Yx9wXRVMAAUCkhMM2xv9G5cNbjHsmhHrhGGrcJbeExAHnuZZyAne33",
  "key22": "PR1NhmZtgA8PaRJVxCQL2GDVCpqvDxNRFzCDF8ibFXGPDZoF4uSud36xRPKd4HLX4zZcW4ecrMXx524NsYzYYBZ",
  "key23": "cqZ3ZY9BypmitpWRuq3MQN9k6QWcAqkYa15aSEhqVbGLYAhNLzut3e3QenH8zB35eGPFLb6kq2cYZo47maKEinU",
  "key24": "3f4vsENR7ZEn2YGzqujzrhCnXw7rt8ufJPQY7cP5fqUiKY9R7w1ErSMRKJMKd1EAo9U28RDJQZnf42aJVbmXCPGG",
  "key25": "4aRsD6PKDXEspzKBtgX4nDHBNzCb8YgqVfwhfPccjrKYRwZ7kdvtKNK4v15fnnUVf9VD9VKUgkoHfCWqGYWwUMut",
  "key26": "59kTApAKwnQuJriHapeDusbS2kHuJ1jmxqK95WGN8QtnwsRcAN9qEvwvDr7rdLRjgowJHo417mprWCZ7C4rTFgPz"
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
