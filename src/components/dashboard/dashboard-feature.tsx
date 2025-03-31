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
    "44SvqwjSdMvbvqzCFG7EiPWGMFBf6WNuwWinNecB2pYJRFgZjk6PTzhbaQjVSkVSxTsQKjEuqvXkjy1r1hfA8qxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eTTYs13ma3CG2C5wPP6JTFJprRXMwVAagwdBjdkmfhk7MdpRCuqF6udxuYwrj1JmdztL7vYyAjajkPP75ZiKvAK",
  "key1": "3rRJEod5qurZMu9U34TSSQ3T8Wp8h4nrCHouMWL3wnwwYBqLQBgf6kGb2NGgVXGGhD6tu1ueWfZt5uSuSpPcFyev",
  "key2": "5vRT4nHoGq2LCAswUPQMh8nxkytroF7e9kRyNemULsmzMefjth5tHoc82j6dFDnPhUVn3L9XQJsEzQYXpnWn97nB",
  "key3": "4ud5cvu5Uuz8MbcvPbFTJ9bjCvCNKWzkKiP3pDGTCHx9qrCbCxnNXA4GvthdmGEgtFGshrDHkuSNEk9kVqt1kZPk",
  "key4": "4LGWcUB14JkVYhB43UgGSweS48DyntGK6Fpo64YRuLkLEG5U8CiJCmK9cWF9dk5BTcKYcwDT6gXHBMoVjPN9Scv9",
  "key5": "V5ssYeE9aBU2nwPPMAh8yBDPrL2Y6tJa9CB4TzDtLCrw9maJSaDAyYGWJbV5smPG4KKoNiNCNUhm9aZx8fmUx59",
  "key6": "51646eG9Po8hdLMqNjjmN6YZE2wXA6iJuyg5wcrmFTJhRbmFiFuZKz5J874Usj49mVCybgr1ZhJEeYYucVDzSPw",
  "key7": "5XkdDMWzWaqz1eD4hR1EVj3vwdaDzPne5MNRcDrPvav7epgSJugfE5BNfcedRpLXAUKBBrsw7i1eEGXJevRFj3uk",
  "key8": "4BA85QwCMFMwMeb4NKd8Q8HYTimgsxLVY4z94hcmdpkqviVJ1JtJdPaVui2xuSrSwLtNFjQx6xTnuha6HUUsaD5R",
  "key9": "2bYt4tcjLAtLPTp2iKXPdTwhRo1anK1UZnNEm64kpnFL6qCZwy1obALXnnVnFCcFxySLPYb9jEQYAaN9m7doZmvg",
  "key10": "rDhM14pk2Jqmsq8cKvdYubkBbEw2B8bqU7jUm5GBDCiB1TNh7djW7LAz4hZMA7s272SjMEKWH4mbApxfiUUcBqS",
  "key11": "YstTdqkW1UiNaRiNpY8HWHy5UFxNaZGk7n4djuwqz8KEFAmu4NDmnrTxkxq7uAenTJWuh63BV6c2PEASM4WEGpR",
  "key12": "5oVEnyhzScCo18bWEqz4wWyacK7MLEcs1kiiouGZx6YpiUPUPMmqxaezGnwkgCqQrLB9czdVj4TvjqWPXwiG243J",
  "key13": "49CcCqpuRwshSAgzAzCZ91qRdnB2bbD25e7jwZ7FXYqes4vgnSdVbLN4KNKCSLP2ci1u2mwjvBiBPhr2nsEYFPh9",
  "key14": "2P2UUr7QmHRg9yeKY3QWsbvy1LhsbbWrqHFqb1ZY4idSe6b1PTVpkoaodvbz4NByJByVuyWsCSNaSzmBcYM976Ei",
  "key15": "21JjADbDRXFJZmXWjmobZqzCCEQkqsxUkqW1DF2Jfc1HL7Y1jAPuVsdK3ugUfJPo6G43Vgx741TD6QtejhDC1tJ9",
  "key16": "5mmVXxzuiqNrdn8FnX158YWswqqofhzjwhkYes5ymGFzD7MNUJoMaRtGwscXsjbvz6hWGCAVo3N2gdjVJEdSzs1F",
  "key17": "2uAbH3FhNzWUn9n93JRk2uAgqUo2UPwDiFfE1L27xxUR68Bsf2he76A66dFGq8CG4fBRW4uaNYtjrhtogrmdjAoV",
  "key18": "5AqHdvjGmHHsxuJssgSBvHN22pwt2hnv7QR9d3tAYwinb5FSnkrKvN8VtH8Whd6Cy7fwFr421yYYRM3CeVBLaSPh",
  "key19": "4Maks7SkkRDGamKfrVWawYrVWr514vpwMSdCg4YSeJK3sCh9YgWA61dkLg1szMaGfSoTgkiojT17ya4NgTzrHKjf",
  "key20": "4gBseJTyAvwwLS3nXeRAsHRRsNZ13MncuMgsBFFWQqpjJsZKnuggGg4BEZ8sWb1eUaxn7a9PsxbBctRzoJYuBS1M",
  "key21": "2fVdLpi3pYnAzSK8Xn4urFL6sT9eQY1BNgthYYu94cWWFWPGmRAW9PgPNVjCT2UxwSGr2iaU4zK4aDQEW18ZTv7y",
  "key22": "5ySRtqzctGhd97Qe4swxa7LyJVaSXnNG7HXSbzGnRAzbrwVGQsLpL1mn8Krxz9LmQWi6AcNQCrVyjFYvs9Vn4WwS",
  "key23": "66RT51wE5yFJxv5Yfr2whvp8hxr4PoHr94FnV1WG8en4A4Y1QsDytYaRXyVN8zbcJyi2tPsBoTNW7KyeriS1gaWx",
  "key24": "FG53emxpp2vdV4evxG1rD3Y5rxzLAjao1LUAV92gS1HuZffCMpPjTv5gZEtMQ8uytAw2f74pjWGYeZwDG1xja8A",
  "key25": "3eUmrWSrSYdbcu1iyVrWZiwjUPtVs3fzjafbTk6xuwfqC68Np119gjqQeDLPBTzuA6sA3R3Pkpr2Spb148ZNxqWu",
  "key26": "5k36gKv9d6mnJ2EA22S7SBNT84RVdfgiGM7eZPi89NwXrgwNPsdaNJBxCxcDe28ArSAoQiAkgpUs72eNMoGJuM6r"
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
