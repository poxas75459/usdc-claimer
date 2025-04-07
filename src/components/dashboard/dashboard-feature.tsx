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
    "2kUcTFvQQpth5fSo4GtYHQG5K9uAum4eTRdnHWtpixCrCNjPqvcu8CNn56KBvQN6Vwou31ubpL7S6VFHfCf8mGXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvAWaR3f9rpzCvn7rPpeuRd3FZQXNM5vs5ALnKLDBr18ZPeyii5spBAk6oiKcWatjcr9zNuvHpjjodbxoDwhwss",
  "key1": "AmajcGN7MgMA5ruHuPjvXxN6tAT7aF3h44GGEGXJe6yACfQvHSUTTQXQzvMXJEr8HxnWbtFvAGaW6zSv6D8ymg9",
  "key2": "TVZ8KTMkE2YAQXxuWwn8HvtC6UG4YNEKUhwbdAhnxnPUnJupcukmD3nCR6KVaQfFe5N9xpXJn6pvoiSnYPaN6xt",
  "key3": "5gH8zWyg1U8M3oaMjNWJN1v7fPUWvmN3j6yq56s8BMTD9qZimqgugHUaYEWTDZsGiNYtDJ2rGRdA3cnNzU2SSM8Y",
  "key4": "285duf5DQy7vxDyGPxAbFTeE2Dqi73yr4XkrddPh1Ymd1asXDd2yMCFs9GRVshJV7jhLuCRkL3rCqLHyDWQNBSRJ",
  "key5": "32jWn9sVz1Gqz3y5AK3QMF9zNo6T7vr3qx9QmPTcbx2aUWnwLxL8ezavxiYowzQ8AYtrzeB1vVvhxSKi9ANKpf3N",
  "key6": "384vo8v87LYGHiNwYA5dy3M4iU9Ks6LMggoZ5v2Wvxjq9atwupXd7cUbU1kguPAQHupTK9t8JoNhuTBAhDYhwaEc",
  "key7": "5bRVRTGZZ2SvQnNoZE8gcD4iMz9QJyVYKk57NUDMM5HJARLqtwSn2f2Lcw9cESHT99UypF8Gy2mjNHbPKpMnR3VG",
  "key8": "2TSL4yLxNUr5aYfuypc9zB5oN6iZMYhouwZqVd8rAQum9ZrJHGrM4d3CPsE9z5Eb2k7DfzhdHTR1eTKo3UaMzWkb",
  "key9": "5GyGKNXLR4uBjzYLnUUecaC8cjzo29faunq74EdE7jCqfYULDWppGHnLxbH3s3PF8zkkuDNH2iN5Vp2dfarGFQjn",
  "key10": "3utgzqRzYZcdjYwPxDnYzKjCckUbh7PFPAFQSwXRgTX93FxYx6oqnLkdjHSUE1eSoZjUtQ3ScPaWHKYmECQur4oM",
  "key11": "5fAf99rdoSnr9uzERs6LE9CwuzNna6MAwVncPqSkrAkmsueNNA8Jt1kP2eoeFpit8EVoLsBFfPwUAjw84UG6gank",
  "key12": "35fprvN6SiyyfUzXUVpAM3rsjK51w6HHuqu7f6Qgx1Qg7ApdNBZNXHCN2TtnGufauEMx2NGDF8ijUwDCRYxTRfpS",
  "key13": "3bUQqA3jGNu6NSteCt1F3B1XyX25qVgRREzc3UTjdcsZ13mAx1aTto4JWycyqM7PUyTUaeQP5VTRApQjS7d2A36A",
  "key14": "53382oJeZQN6wCBUMCP7PKgJ96buCGUmEjA4XcTfQMsxmGBCJoMtEdw2M9enJ8HmN1jYrCmcV21yk92YhyzQLpoS",
  "key15": "4juyh7MapYJVY3hCpHeypuf1AjtyW2QMb7Gg2WVXVHwS7hQKetGAsHeLZsUXxT4AQvHtNVeWPjLEG4NzhTakjLiz",
  "key16": "5XnjzbjfJmZeKkQUifzEGqjDGvND2BYqVx8SkUj5XqccTCoCCriwJdrVnEE6x8nwH3wsXQecF497iFpqAxkyQRwv",
  "key17": "4xzwZc88C3nR4DcXQLVKVV3wWS27HwZA4Yf4qcCTMfxHsyrEn2h4sZHF98JwfAWR6jjenBE1MDNiKrZcd7RM4zTn",
  "key18": "4N3N7yV12sFXYC18a1L3Kp6581orYBYVA3qWKShiB6itmcbGajEjTctXmuxtFidrLr1FGCwx2MoaiGyKdDTLEdV1",
  "key19": "JAQ4avQjEa9ZgSt49upXjDxr48V33uYraPBUz4bNTFSBMmJhJ7uqED1Jp6hie8j9pLu3SfbtFPAGLW2BXhwwiLz",
  "key20": "5yyZpM7hksCpwSFhTBhYgLMnTcFrC9orLZ3YBwSrZFFV6jRRak38xa4WnuK7skiGbNV6hiJBNxK1AQf4aA7kmbsh",
  "key21": "4SKFWXaR7RVVN5iswgDZ5mJQzj7SViUWLGwpzPJ5RMJHFr8jsRifycuhiNwqr923oGNprferPEPdqHCCuXAkUTGE",
  "key22": "3ezfkd6mdLZMgg6WSysVeJTjWP1BaoHZstCmgTcmFFrp1P6wHcVBaL49Z6GH2DJVWpxk8DBV5wskUN8BuScW1ZPY",
  "key23": "5ze2BFA4Lhujeq4eMo5AndKLsFAn4xgB3wKcpvS63D7VEn2HLN9xJwu7FASgbBKS9guoaCSyKP8rPojNcQfC4RmS",
  "key24": "2pVdEs4pyo8yj71jbQYCpCZ1ZJPqBmpJsstWBSUEUjLEJwXoMVKHK19kHhqfsSrxPaKUPzQ6jGA8TsLiuNtE27pB",
  "key25": "4mUT72wuTZJ2vpt4boD7YFGke323qTwqQDe8fPmkj6KS5J79riKEjuPK5tKxrD5RhUmbgivK9m81TrShvFV9iuLR",
  "key26": "29GEdp4ex8m2SdWRRqtN4Zjem6sw3nHCDwb2CjJjhMhUYyBou2dXBkxt5U45g5SPbWWESydQoykuEmurRNSy74EF",
  "key27": "5yrQwPaPUnPAahFhqs18gkRWkJnnu1CAAgnVGgLM1rNG6jaWZ1wDRXX2viUivsdpLiDysaxQC9qu2pVCz41AoKj3",
  "key28": "5mXBpK7hQeY2JEZH3K6Wbi4dTHUfxp9CJCrLRUb56eJMtAxygUYDUqswvYWyBLUfsqWhx1aWi49pR8CDDxwHxZZV",
  "key29": "2qoTLBYvwirC87YaBYyFy5jtttzoU2rR3L4s8JowC9xcAqxAFdtfBxHy1jZKZhzjJ17oNMEn6VbLpNTLNBYuurmU",
  "key30": "45KD8X9F82Lyh3HuJGAMbvdGL4zSJREEJBR67TTk2sRTnQZ6HLH847HbriRmm1ru6Ee87rKScP3hUBP2DjKkLZkj",
  "key31": "5MVGhxijmxjncUqS8V6znfLphVpSGKiBFZnjYQrczaB7Hg7NmY4u7RfZyTW7GREfNcgCzYjpdKVNrynwviCMeyNb",
  "key32": "3Jcb6XvxZU31T7UkcbFcBbWvLHeWyAFPcYoDs6hqEH5KJ51eS1hy4ju8pWUQsJ9sq9KX16nJTTmHX77peG7dqWft",
  "key33": "2nG2BAbrh576xwb6RLoaWotyjRkufkY9SZ8dhqDbxwCEU4JxDnGjTcSo86wV4rwSpBMnZdoWS64XG21REM6ujDWs",
  "key34": "2XNZaqqQUfg2HTF6UT2XY91RosisaJdh7KYSoikyuNmKN4McQDifR41bFjDH7FEzd3qRfV1fqneF74WrtuxokANY",
  "key35": "5JxoR5NkJx7QibUcQKaqbPCv2Nup7D8AkbLF5pZPEYAm7nKNQdSDxxTs29Pk8t4kQvxqmQxLuFE9TY1P2vMMNZk9"
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
