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
    "3cngSd1WnKxAWpEZTNojUjn2r6Do1Gd2T6uUg3nsJC2Cy1NfHkhFWxqa4QtXZcfadNX2NDuuMKGohG2koeHVjzi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiQZSXoErqrdPzPUHmvEWdxFeJ8Lya5HKVdpw5puiBRYGMTwkHcnEvQST9UQqEz7FQiFrvmspzWTwMGzBDwRkFy",
  "key1": "2XSbjqExaFJq6rH2YikEgEjdP2FymrNnKwNdorXC7DLXkTxoJHvgXzzgHWBQk2j4jyoXaKF1wY6gYXzzu5SLKsKw",
  "key2": "62rJLhngqUBWMqoGQfntgr23mnyhyki6bf1Xoom8djT97zzh7zh55Nob75dWsnjUaq9Nc37ZvPky2cWcidWUEd2d",
  "key3": "4EgCCRxqhfQ5QUxqkTNt2QwDtM1isHRY6uUVXDdAEyvYWCQU9Vj4cMocFSuKKUhKYkF34Lw9CL2uYvUStTCN2pV2",
  "key4": "2RmiXJ8A1jrndmrMgTUHGZtusGK8ctgVRZcWFmx2J5Pqc3Dv91CKc8tkEu6BWqkVki6DJpf1Fdi2t1tz4HEUAPU6",
  "key5": "VqWgTfcru9CLp8PEE3zF8LcDr4W4UwrvV2krLEt1vz24hKU3gFDM35vtYgEnLnA5gDbH1z9UgawRE9z7k3hs9dB",
  "key6": "2eSiSpmJazJ67uk2Efdcwpk9Ee7MdZ3Me3ysEExHUn7Gg9NqcNm6aMTLfjNcCnuVDbXiEXa1QN1RHiGa9Z1V8VBV",
  "key7": "26uTyW16WWHBE7LhVpb5SGWJ1NaSxVTHJEks38G3e7ydEtYv6pQoi6N4myrYXUH8x2k9i7AvsCvBJGBL8S5TxJht",
  "key8": "3SEdu5bs7fMwDp3zudWybN9B89yKfwd4UC8C9fSKt9JgbuDQJsMQNEC6WXXQH5LWcHEna4viobiFaW1LRmyKhwr6",
  "key9": "5YjGjmXL1BCZKoZixNELfzLYFJDM2SEeLxr3RsMrGzzYrkUqQGtnEzaYx77eECdg9vGxaJeGLF6VAEsxsDXCzxsw",
  "key10": "2Ynom5gjaGJCXyRYXtwHGNVioLXKcsTUBwCbbzbkFe2HjnUdPTnsoSKenZPWhMBfpAQtVQiwXYnGCbwSxQqicTFr",
  "key11": "5JEZKY9Maab6XRdR8y9iJTPwVdeA2Y1hzXYP8YxXK1czdvhYJLHwr5iPWUWFrcjdcMKfhAdiWQ4aQNSLtrbESYDv",
  "key12": "RX8Q9vEkxeZYzqcXW2MQeFVqP9teHX9AfQwTtVfvxv78PbpTHPhTQaPHebcREGj2fzZTXkkfJfGGUvYAeoiET9F",
  "key13": "3Sob85cmXEk6D62ea6vQS3AA7MNvfcjJsma9ytvVGNRKAPXEvieJcgNQUiJFCMuA6qiXBi6bQpYqGUnK3sFwx6rz",
  "key14": "Ad4r1xmYUyvaMagg6tQ1mpviANx97JC18eyE87XGRaLtcUe2aS2mnMLeernTK2v8xm5QN83Hk3VeXnoEabrn8dM",
  "key15": "4FHJX3oxa6oaRnE6itTbTZBPeP6i8Nooq4SUHttVFovG9j8WMPeShr1PM5xssmC1SUKAbV5zR4cHADfSbUpRcKw",
  "key16": "5AU4KGnUtSSjR9iLzmxepY581pezdejBJ7WQ9dnkfcbwFTa5pCvN8HK3384SbXM3YAWtmmm9M1PrCinRSK1BKJc",
  "key17": "4hAWgi8NYY91kCskxqws7smGaNug8rh35WMk1fMppcUzF8PCDQe7sFBLTgx1LsT418D38uzWtJLLUNP3QNMtK8LJ",
  "key18": "2hAng14sGUL5WxGDHsZXCGuF9G1BWuitHnjp1d7CX3TAYgDJ47Konvjf4eSLKB6T8bX6JaPp6f1N9qaWpWXcK1FU",
  "key19": "4LiQrAp76L3Dy5X15BSnFKgnN14oNmbB1nJrGpLikM68kSdGabGCgZgHTBCVLozF3S3ExfAaHZLy2Ce8zSaWDsju",
  "key20": "Y7LkAxk5dCDNmGkEGY9NfK2JHua5SSC8hvVHwGbv7ANX3yiTbJHxuGjQqTaBEwrzDXxSnF7rxMyL37Uin9kUyKR",
  "key21": "5dEUKLrpaJC9yjDYpb47fVa5uLoXUh1REe9frMaDbskkjynb6XYhtgRarW21pyEQwmkkwyn5R2fohC2H87an5fo8",
  "key22": "LBgSfqCV4WRk94HVEUMot7oYhPtxx2wJDbhS9ztQm4ytuFjruCBwj5zJfiBo3rn7Cv4zNjBZer44EpP4HaqYT3L",
  "key23": "2stEEX3dw16Goh1c8oMsC4ogXGJfRWUFYDCubyn81yaSVDGg5VZty16tSgFE32Ct2gNYFWfsVRZk8DxuqwPSwJ4a",
  "key24": "3danXJxrzDR36bZXmqwx6CiZFjZ9XqgDYYhtnVzBP2wxmLULdcsRsDsoeMkNLp41ZPZQaeGqBgg497hXECF3uqhU",
  "key25": "2RgpJ4P2Q7hTDgjHsZoTRzXYvZ2n3p51HthsJ1ivPiaUDz81gA4wXJEGLfuDQ64wCFx6RZP3Bgfcayzxe5fXe6C3",
  "key26": "5PXqydoNfxHkDTF6PqNXEDX72GN46Q1nxQfy6E4md1u37EiRdCGhXMjoXTSqyPPrCGqtbW3mau8TsDhL88pH89T7",
  "key27": "4xQhb2KJBvUgS7LFaHyeWCMTrEy6zP3PoZeYJKwQDLw86RiXkUWsuiT4djFQvgw8swDeHsstnqrvWKfHmFrBPyUi",
  "key28": "42qRsQL49DTKtvrMb8VfjuLtiiz6Qe6zY7DqgdmLxfktq5L61nCJy6XDiHgURWMwWmr6SGrxwMTf2FWSPz3SqimJ",
  "key29": "Kd4PYDy9Ydi1JYRpXPZBg9GyEkgc5amu64EiWRHTeBzDFBQN4DSucUSNw5ELFdZHGT8YXJ9rnrrTHcTxMPVfGxt",
  "key30": "2vUxV9tsYhPHfFPCtWyiBRmWHkpCVZKYx72asmyaTfBveQkF61kK1xVgShgfjyZALS332TuiZTJZLhX4nVbTeDNe"
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
