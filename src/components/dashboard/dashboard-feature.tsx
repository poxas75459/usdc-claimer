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
    "2fkeMtHMoMKed2zyGdoqczyqRjfG6Hd26tMSHLpyzNR2VRBrebZEWMTvpDMprsnwm5eSZiEr44kBRqUnGkbBMPd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePcNA5oo6ErTKWURPdu9a86tS2F9NaSYDGpxm8z1ESuVMs4j9UUQs4REK7ptcTXQDQrbkgSFQmZpVt5WuJV4phn",
  "key1": "k9HwkUZSDbzh9tfsoKEKBKMXJy96XT6jkt6KENW1XVN8yNznZa86ppxp2qgKCaugScRvkANVeGfPyaKWAxPK7LE",
  "key2": "4URYpWebQ3Do92zrBUHP5gK1nm6moNgCXNjhk34QBUtoHvH19a2sHate9CDNLCm2tbhP4kRageV8dyA7gWJcsk5t",
  "key3": "5zUTt3XLEvsxyT2rMth2mtgZnurWmJHWgnsJm9PwmedjybmoZFUfJnNdhX5odiFpXpLbVSrZAxzUDV4mTvQDjpJq",
  "key4": "4M8HxdTcZHkrSe1EYzNizWHXzDtD3N7pGQGovyqu1wPTdLGpVYsh4HJBBiDWgk7Zcfq5immyTNDrVf6n3JHa6a1j",
  "key5": "66AahMPGQy5X4YxthB6WwCocunXWQdH4hy3jhDVyY6pdenvtMbrxEeFPzdt3mvCzj7vwxpWCfzGfEHeZq3Fj3ag1",
  "key6": "2FZG4S6Hwhb6kniNtVuYD45gbmF9RZ1eVrQtbMj8bYUQDSafY11YHzjPtmp6QuQdrWENxRgawZ7ag3CMihjxsKNP",
  "key7": "8oLrfgoVnGM4D2jsfC1d84g6wRrivxmhJ79dVsbnG4xXuDr2aeyixuBjcUnGG7XprQaN687h9dFNGmdDEsEKVJ7",
  "key8": "5cS2v2aaNXNdnXyzEAjsxUSc3xcVEE8N4KVzZt9aYFsUrnFvLMkWadBccbTMaLbMv8XnvE82gD7CFMgdoKQPdY8d",
  "key9": "3nk3W5fyqqNrbFeDcvzwZHu9y59dUWtMtYyENceYevmY4ay3azeFj6eju68i3AjbFRenHLSHS8kiRkimMicCuJaN",
  "key10": "24vS4quWRuEEDKPWEhhzzdLsX3pFbUeGo2wtptqbKxtbAECE5LQtzmqRf2xtS4ezwH5YCmfbBvMisyrtysCExoau",
  "key11": "4pZfr5JHanijgatrpfE6sZbPJ63thoNJ5JSTKhigBok5A5bYhs1cydDbTAorE7hu8rJzyRedYpyrN3hgeUP8nUQN",
  "key12": "5ajXjPQmgwLEpkcAR7diCYycCqHcLWp4yv4E7pSRy2qaajY1kW6sWswRN1an8AiRrPbuokWL7D3QA5SM3uuNDT5P",
  "key13": "Lm7y3eWpYAR15Q2SetzzYMSeqzQSx4uacuXasn56yYvc6jbWp8oPPJoiag1KdVxvqwKwWbGy9NjXRxCkm5Tuhng",
  "key14": "5137wFDuuL6KuxuJ5jZHQCH5Q2HS2HZKFF2FthQGLBGN2rUE9pJY1BtzvgUVLDVAdtAFVNvDM2MBR4WLisd1wvva",
  "key15": "3h6zx2VeMi91juVpvEy3LSuAs538QgTSeuChqCQwGse5eYz5TqgFKU7vMiQMZo5Y6nquyud18m3hDAsj3VHxC2HL",
  "key16": "5gYe2PMbZsd5Lfjdi1Rb8mV9otExGYL7w5YUgcj59CL3TaC757NCDh3PvfrYBbkk5UTZ6KbkSYi1ZxCX8KaKzaST",
  "key17": "4d61eQ3rTy67U6B5y5N7wSG8khqw5HUmPFRx9iadTJzW7FTSu8wKE28mUKX33sWChBrU2Do8J6iiZZDcQ88vc4YR",
  "key18": "3mSCL5e6gkssyfs1skSE8rEyx4GhdK3DrtxYjsYfXmQt89du6H2BUiRehYgCFU56QpDzPbjs5gRTDQurkWxoV2pq",
  "key19": "3bea4rXCPbBuBanNDWWp1Wxj6yaQ2H7WL5VdGjTRQLjtsTbYCEHrzsXPAfkutstwne9qv5ZJ6TRYDPqJdmKxZ2wG",
  "key20": "4Mo6R3Tmb6HnT75i374HueM6v5CyhzZbxYUqSeKekxbrSxYi6RuNRz7vU9fLgjFQqE3qBmoUMNHGmcpoakukru5o",
  "key21": "5hamoZbtnz5TciMF5iz4MWv1hrR32VT36uaaGPnJYHr3Z9eGcPEw6oAkP5NLppevdeNYsppYcwi1R9MrPUbHw77E",
  "key22": "1v2M86uDfjWbmCXEAaAkSZCwQ95pzTgxjcLPi52NrLpzKYTJcpF6rA2A8KoXzXuHFbjCZqk4NXRESxZwSJ61yQU",
  "key23": "41rnspre1AXoGSDdK6kEqYA6SVFvM48dren3p45bQCrP9Huas9MaLrBnEcLNdv3Y1TuzZzipTwDPH9fEVGkZRRdS",
  "key24": "g7KU5kgBA7oBZgbp1CBoiHPLDtQfV2S2hZfRqKmppAGWDt3HU1mdq1Jb6DcsZWT15L7bNfkcQLL6fbrzGCww79z",
  "key25": "2JcEP66gWy3KL8kuAEASQNZgaCB6qujRqPwuT1qY31kg5VhS79FmqjwSKcsiepryJWXzJQHBQxPsKyhApeGgSR96",
  "key26": "4H35REQPkczs12bhfW5UxdiXVWtYMxdhgFXN7fhjGV5GRmdmFu4uWSin7xKzNczWmtdkqptMwSXFu2MdmM3HLL89"
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
